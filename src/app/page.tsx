import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/top_selling_product/service-1.jpg",
  "/top_selling_product/service-2.jpg",
  "/top_selling_product/service-3.jpg",
  "/top_selling_product/service-4.jpg",
  "/top_selling_product/service-5.jpg",
];

export default function Home() {
  return (
    <>
      <div className="relative h-[450px] mb-4">
        <Image src="/home/home_page_image.jpg" alt="home page" fill />
        <h1>Home page content</h1>
      </div>

      <Carousel className="w-[85%] mx-auto relative">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6 relative">
                    <Image src={image} alt="top selling produc" fill />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 z-10" />
      </Carousel>
    </>
  );
}
