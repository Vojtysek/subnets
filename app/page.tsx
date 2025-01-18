"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableCaption,
  TableHeader,
} from "@/components/ui/table";
import { useState } from "react";

type Subnet = {
  networkAddress: string;
  subnetMask: string;
  firstIP: string;
  lastIP: string;
  internalRouterIP: string;
  externalRouterIP: string;
  broadcastAddress: string;
  totalHosts: number;
  usableHosts: number;
};

class SubnetCalculator {
  private baseIP: string;
  private globalMask: number;

  constructor(baseIP: string, globalMask: number) {
    this.baseIP = baseIP;
    this.globalMask = globalMask;
  }

  private ipToNumber(ip: string): number {
    return (
      ip.split(".").reduce((sum, octet) => (sum << 8) + parseInt(octet), 0) >>>
      0
    );
  }

  private numberToIP(num: number): string {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255,
    ].join(".");
  }

  calculateRequiredBits(hosts: number): number {
    return Math.ceil(Math.log2(hosts + 2));
  }

  calculateSubnets(requiredHosts: number[]): Subnet[] {
    const subnets: Subnet[] = [];
    let currentIP = this.ipToNumber(this.baseIP);

    requiredHosts.forEach((hosts) => {
      const requiredBits = this.calculateRequiredBits(hosts);
      const subnetMask = 32 - requiredBits;
      const subnetSize = 1 << requiredBits;

      const networkAddress = currentIP & ~((1 << requiredBits) - 1);
      const broadcastAddress = networkAddress | ((1 << requiredBits) - 1);

      const subnet: Subnet = {
        networkAddress: this.numberToIP(networkAddress),
        subnetMask: subnetMask.toString(),
        firstIP: this.numberToIP(networkAddress),
        lastIP: this.numberToIP(broadcastAddress),
        internalRouterIP: this.numberToIP(networkAddress + 2),
        externalRouterIP: this.numberToIP(networkAddress + 1),
        broadcastAddress: this.numberToIP(broadcastAddress),
        totalHosts: subnetSize,
        usableHosts: subnetSize - 2,
      };

      subnets.push(subnet);
      currentIP = broadcastAddress + 1;
    });

    return subnets;
  }
}

/*
const subnets = new SubnetCalculator("145.184.128.0", 18).calculateSubnets([
  2000, 2000, 2000, 1000, 1000, 1000, 250, 250,
]);
*/

export default function Page() {
  const [subnets, setSubnets] = useState<Subnet[]>([]);
  const [baseIP, setBaseIP] = useState<string>("");
  const [globalMask, setGlobalMask] = useState<number>(0);
  const [hosts, setHosts] = useState<string>("");
  const [_, setRequiredHosts] = useState<number[]>([]);
  const [error, setError] = useState<string>("");

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#242424] text-white">
      <div className="container flex flex-col items-center pt-48 gap-4">
        <Input
          type="text"
          placeholder="Base IP"
          value={baseIP}
          className="w-max"
          onChange={(e) => setBaseIP(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Global Mask"
          value={globalMask}
          className="w-max"
          onChange={(e) => setGlobalMask(parseInt(e.target.value))}
        />
        <Input
          type="text"
          placeholder="Hosts"
          value={hosts}
          className="w-max"
          onChange={(e) => setHosts(e.target.value)}
        />
        <Button
          onClick={() => {
            const hostsArray = hosts.split(",").map((host) => parseInt(host));
            if (hostsArray.some((host) => isNaN(host))) {
              setError("Invalid hosts");
              return;
            }
            setRequiredHosts(hostsArray);
            const subnets = new SubnetCalculator(
              baseIP,
              globalMask
            ).calculateSubnets(hostsArray);
            setSubnets(subnets);
          }}
          className="bg-[#2f27ce] hover:bg-[#433bff]"
        >
          Calculate
        </Button>
        {error && <p>{error}</p>}
        <Table className="text-">
          <TableCaption>Subnets</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Network Address</TableHead>
              <TableHead>Subnet Mask</TableHead>
              <TableHead>First IP</TableHead>
              <TableHead>Last IP</TableHead>
              <TableHead>Internal Router IP</TableHead>
              <TableHead>External Router IP</TableHead>
              <TableHead>Broadcast Address</TableHead>
              <TableHead>Total Hosts</TableHead>
              <TableHead>Usable Hosts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subnets.map((subnet, index) => (
              <TableRow key={index}>
                <TableCell>{subnet.networkAddress}</TableCell>
                <TableCell>{subnet.subnetMask}</TableCell>
                <TableCell>{subnet.firstIP}</TableCell>
                <TableCell>{subnet.lastIP}</TableCell>
                <TableCell>{subnet.internalRouterIP}</TableCell>
                <TableCell>{subnet.externalRouterIP}</TableCell>
                <TableCell>{subnet.broadcastAddress}</TableCell>
                <TableCell>{subnet.totalHosts}</TableCell>
                <TableCell>{subnet.usableHosts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
