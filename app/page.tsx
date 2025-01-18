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
import { Clipboard } from "lucide-react";
import { useState } from "react";

type Subnet = {
  networkAddress: string;
  subnetMask: string;
  baseRange: string;
  lastRange: string;
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
        baseRange: this.numberToIP(networkAddress),
        lastRange: this.numberToIP(broadcastAddress),
        totalHosts: subnetSize,
        usableHosts: subnetSize - 2,
      };

      subnets.push(subnet);
      currentIP = broadcastAddress + 1;
    });

    return subnets;
  }
}

export default function Page() {
  const [subnets, setSubnets] = useState<Subnet[]>([]);
  const [baseIP, setBaseIP] = useState<string>("");
  const [globalMask, setGlobalMask] = useState<number>(0);
  const [hosts, setHosts] = useState<string>("");
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
              <TableHead>First IP (Router)</TableHead>
              <TableHead>Last IP (BroadCast)</TableHead>
              <TableHead>Total Hosts</TableHead>
              <TableHead>Usable Hosts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subnets.map((subnet, index) => (
              <TableRow key={index}>
                <TableCell>{subnet.networkAddress}</TableCell>
                <TableCell>{subnet.subnetMask}</TableCell>
                <TableCell>{subnet.baseRange}</TableCell>
                <TableCell>{subnet.lastRange}</TableCell>
                <TableCell>{subnet.totalHosts}</TableCell>
                <TableCell>{subnet.usableHosts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Clipboard
          onClick={() =>
            navigator.clipboard.writeText(
              subnets
                .map((subnet) => {
                  return `Síť: ${subnet.networkAddress}\nMaska: ${subnet.subnetMask}\nRozsah: ${subnet.networkAddress} - ${subnet.lastRange}\nRouter: ${subnet.baseRange+1}\nCelkový počet hostů: ${subnet.totalHosts}\nPočet použitelných hostů: ${subnet.usableHosts}\n`;
                })
                .join("\n")
            )
          }
        />
      </div>
    </div>
  );
}
