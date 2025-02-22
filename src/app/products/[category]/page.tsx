import Image from "next/image";
import * as React from "react";
import { categories } from "./data";


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const categoryDetails = categories[category];

  return (
    <div>
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">{categoryDetails.title}</h2>
            <p className="mt-2">{categoryDetails.description}</p>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto relative container grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {categoryDetails.products.map((product, index) => (
          <div
            className="flex flex-col md:flex-row items-center mb-4 bg-white shadow-md rounded-lg overflow-hidden"
            key={index}
          >
            <div
              className="md:w-1/2 p-2"
              data-aos="zoom-out"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <Image
                src={product.image}
                className="w-full h-auto object-cover"
                alt={product.title}
                width={500}
                height={300}
              />
            </div>
            <div
              className="md:w-1/2 p-2"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="italic text-gray-600 mb-2">{product.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {Object.values(product.keyFeatures).map((keyFeature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="bi bi-check mr-1"></i>
                    <span>{keyFeature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}