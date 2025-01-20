import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function PageCMD() {
  const images = [
    <Image
      className="w-fit border"
      alt="nameservers"
      src="/nameservers.png"
      width={500}
      height={500}
    />,
    <Image
      className="w-fit border"
      alt="tracert"
      src="/tracert.png"
      width={500}
      height={500}
    />,
    <Image
      alt="nslookup"
      className="w-fit border"
      src="/nslookup.png"
      width={500}
      height={500}
    />,
    <Image
      className="w-fit border"
      alt="nslookup"
      src="/nslookup_soa.png"
      width={500}
      height={500}
    />,
  ];

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-auto bg-[#242424] text-black">
      <div className="w-fit my-12 gap-12 place-items-center grid grid-cols-1">
        {/* image gallery */}

        <Carousel className="w-1/2">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                        {image}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
