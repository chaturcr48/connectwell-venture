import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface Category {
  title: string;
  description: string;
  products: Product[];
}

const categories: Record<string, Category> = {
  electrical: {
    title: "Electrical Products",
    description: "Details about Electrical products...",
    products: [
      {
        title: "Crane Products",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/products/electrical_products/product-1.png",
        features: [
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit.",
          "Ullam est qui quos consequatur eos accusamus.",
        ],
      },
      {
        title: "Insulating Mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/products/electrical_products/product-2.png",
        features: [
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
      {
        title: "Insulated Tools",
        description:
          "Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.",
        image: "/products/electrical_products/product-3.png",
        features: [
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit.",
          "Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.",
        ],
      },
    ],
  },
  instrumentation: {
    title: "Instrumentation Products",
    description: "Details about Instrumentation products...",
    products: [
      {
        title: "Pressure Gauges",
        description:
          "High-precision pressure gauges for industrial and laboratory applications.",
        image: "/products/instrumentation_products/product-1.png",
        features: [
          "Durable stainless steel casing for long-lasting performance.",
          "Wide range of pressure measurement options available.",
          "Certified for high accuracy and reliability.",
        ],
      },
      {
        title: "Temperature Sensors",
        description:
          "Accurate temperature sensors designed for industrial and scientific use.",
        image: "/products/instrumentation_products/product-2.png",
        features: [
          "Supports multiple temperature ranges and sensing technologies.",
          "Fast response time for real-time monitoring.",
          "Easy installation with various mounting options.",
        ],
      },
      {
        title: "Flow Meters",
        description:
          "Advanced flow meters to measure liquid and gas flow efficiently.",
        image: "/products/instrumentation_products/product-3.png",
        features: [
          "Digital and analog output options available.",
          "Designed for high-precision fluid measurement.",
          "Compatible with multiple pipe sizes and materials.",
        ],
      },
    ],
  },
  mechanical: {
    title: "Mechanical Products",
    description: "Details about Mechanical products...",
    products: [
      {
        title: "Bearings",
        description:
          "High-quality bearings designed for various industrial applications.",
        image: "/products/mechanical_products/product-1.png",
        features: [
          "Low friction and high durability for smooth operation.",
          "Available in different sizes and configurations.",
          "Engineered for heavy-duty use and long lifespan.",
        ],
      },
      {
        title: "Gearboxes",
        description:
          "Precision-engineered gearboxes for high-efficiency power transmission.",
        image: "/products/mechanical_products/product-2.png",
        features: [
          "Robust construction for heavy loads and harsh environments.",
          "Available in multiple gear ratios for different applications.",
          "Optimized for minimal noise and maximum efficiency.",
        ],
      },
      {
        title: "Hydraulic Cylinders",
        description:
          "Reliable hydraulic cylinders for industrial machinery and equipment.",
        image: "/products/mechanical_products/product-3.png",
        features: [
          "High-pressure resistance for demanding operations.",
          "Precision seals to prevent leaks and ensure efficiency.",
          "Customizable stroke lengths and mounting options.",
        ],
      },
    ],
  },
  automation: {
    title: "Automation Products",
    description: "Details about Automation products...",
    products: [
      {
        title: "PLC Controllers",
        description:
          "Programmable Logic Controllers for industrial automation and process control.",
        image: "/products/automation_products/product-1.png",
        features: [
          "Supports multiple input/output configurations.",
          "Advanced programming capabilities for complex automation tasks.",
          "Highly reliable and efficient operation.",
        ],
      },
      {
        title: "Industrial Robots",
        description:
          "High-performance industrial robots for manufacturing and automation.",
        image: "/products/automation_products/product-2.png",
        features: [
          "Fast and precise movement for high-speed production lines.",
          "Multiple axis configurations for versatile applications.",
          "Easy integration with existing automation systems.",
        ],
      },
      {
        title: "SCADA Systems",
        description:
          "Supervisory Control and Data Acquisition systems for monitoring and control.",
        image: "/products/automation_products/product-3.png",
        features: [
          "Real-time data collection and visualization.",
          "Remote access and control capabilities.",
          "Scalable solutions for industries of all sizes.",
        ],
      },
    ],
  },
};


export default async function Electrical({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const categoryDetails = categories[category];

  return (
    <div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>

      <div className="container section-title">
        <span>
          {categoryDetails.title}
          <br />
        </span>
        <h2>{categoryDetails.title}</h2>
        <p>{categoryDetails.description}</p>
      </div>

      <div className="container">
        {categoryDetails.products.map((product: any, index: number) => (
          <div
            className="row gy-4 align-items-center features-item"
            key={index}
          >
            <div
              className={`col-md-5 ${
                index % 2 === 1 ? "order-1 order-md-2" : ""
              } d-flex align-items-center`}
              data-aos="zoom-out"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <img
                src={product.image}
                className="img-fluid"
                alt={product.title}
              />
            </div>
            <div
              className={`col-md-7 ${
                index % 2 === 1 ? "order-2 order-md-1" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <h3>{product.title}</h3>
              <p className="fst-italic">{product.description}</p>
              <ul>
                {product.features.map(
                  (feature: string, featureIndex: number) => (
                    <li key={featureIndex}>
                      <i className="bi bi-check"></i>
                      <span> {feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
