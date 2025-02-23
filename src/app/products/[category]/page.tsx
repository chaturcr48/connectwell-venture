import Image from "next/image";
import * as React from "react";
import { MoveRight } from "lucide-react";

import { categories } from "./data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";



export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const categoryDetails = categories[category];

  return (
    <>
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">{categoryDetails.title}</h1>
            <p className="mt-2">{categoryDetails.description}</p>
          </div>
        </div>
      </div>

      <div className="auto-grid mt-10 mx-[24px] sm:mx-[32px] md:mx-[40px] lg:mx-[56px]">
        {categoryDetails.products.map((product) => (
          <Card key={product.title} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 md:h-60 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4 pt-2">
              <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
              <CardDescription className="line-clamp-2" >
               {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 pb-4 mt-auto">
              <Button variant="outline" className="ml-auto">
                <MoveRight />
                <span className="sr-only" >Show more details of {product.title}</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}