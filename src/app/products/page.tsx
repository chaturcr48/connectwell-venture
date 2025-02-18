import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    image: "/products/product-1.png",
    title: "Electrical",
    description: "Click to see Electrical products",
    link: "/products/electrical",
  },
  {
    image: "/products/product-2.png",
    title: "Mechanical",
    description: "Click to see Mechanical products",
    link: "/products/mechanical",
  },
  {
    image: "/products/product-3.png",
    title: "Instrumentation",
    description: "Click to see Instrumentation products",
    link: "/products/instrumentation",
  },
  {
    image: "/products/product-4.png",
    title: "Safety",
    description: "Click to see Safety products",
    link: "/products/safety",
  },
  {
    image: "/products/product-5.png",
    title: "Automation",
    description: "Click to see Automation products",
    link: "/products/automation",
  },
];

export default function Products() {
  return (
    <>
      <div className="relative h-[350px] mb-4">
        <Image src="/products/page-bg.jpg" alt="home page" fill />
      </div>

      <div className="text-center text-2xl font-bold mb-6">Our Products</div>
      <div className="mx-auto w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Card key={index}>
            <Link href={product.link} className="w-full h-full">
              <CardContent className="flex flex-col items-center p-6">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-lg font-semibold">{product.title}</div>
                <div className="text-sm text-gray-500">
                  {product.description}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
