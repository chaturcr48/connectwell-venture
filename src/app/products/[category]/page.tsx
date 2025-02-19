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
    description: "Explore our range of high-quality electrical products designed for various industrial applications.",
    products: [
      {
        title: "Crane Products",
        description: "Durable and reliable crane products for heavy lifting and material handling.",
        image: "/products/electrical_products/product-1.png",
        features: [
          "High load capacity.",
          "Robust construction.",
          "Easy maintenance.",
        ],
      },
      {
        title: "Insulating Mat",
        description: "High-quality insulating mats for electrical safety and protection.",
        image: "/products/electrical_products/product-2.png",
        features: [
          "Excellent dielectric strength.",
          "Non-slip surface.",
          "Resistant to acids and alkalis.",
        ],
      },
      {
        title: "Insulated Tools",
        description: "Premium insulated tools for safe electrical work.",
        image: "/products/electrical_products/product-3.png",
        features: [
          "Ergonomic design.",
          "High voltage protection.",
          "Durable materials.",
        ],
      },
      {
        title: "Circuit Breakers",
        description: "Reliable circuit breakers for electrical circuit protection.",
        image: "/products/electrical_products/product-4.png",
        features: [
          "High breaking capacity.",
          "Compact design.",
          "Easy installation.",
        ],
      },
      {
        title: "Switchgear",
        description: "Advanced switchgear solutions for efficient power distribution.",
        image: "/products/electrical_products/product-5.png",
        features: [
          "High performance.",
          "Safety features.",
          "Long service life.",
        ],
      },
      {
        title: "Transformers",
        description: "Efficient transformers for voltage regulation and power distribution.",
        image: "/products/electrical_products/product-6.png",
        features: [
          "High efficiency.",
          "Low maintenance.",
          "Robust construction.",
        ],
      },
    ],
  },
  instrumentation: {
    title: "Instrumentation Products",
    description: "Discover our range of precision instrumentation products for accurate measurements.",
    products: [
      {
        title: "Pressure Gauges",
        description: "High-precision pressure gauges for industrial and laboratory applications.",
        image: "/products/instrumentation_products/product-1.png",
        features: [
          "Durable stainless steel casing.",
          "Wide range of pressure measurement options.",
          "Certified for high accuracy.",
        ],
      },
      {
        title: "Temperature Sensors",
        description: "Accurate temperature sensors designed for industrial and scientific use.",
        image: "/products/instrumentation_products/product-2.png",
        features: [
          "Supports multiple temperature ranges.",
          "Fast response time.",
          "Easy installation.",
        ],
      },
      {
        title: "Flow Meters",
        description: "Advanced flow meters to measure liquid and gas flow efficiently.",
        image: "/products/instrumentation_products/product-3.png",
        features: [
          "Digital and analog output options.",
          "High-precision fluid measurement.",
          "Compatible with multiple pipe sizes.",
        ],
      },
      {
        title: "Level Transmitters",
        description: "Reliable level transmitters for accurate level measurement.",
        image: "/products/instrumentation_products/product-4.png",
        features: [
          "High accuracy.",
          "Robust construction.",
          "Easy calibration.",
        ],
      },
      {
        title: "Data Loggers",
        description: "Advanced data loggers for precise data recording and monitoring.",
        image: "/products/instrumentation_products/product-5.png",
        features: [
          "High storage capacity.",
          "User-friendly interface.",
          "Multiple sensor compatibility.",
        ],
      },
      {
        title: "Signal Conditioners",
        description: "High-performance signal conditioners for accurate signal processing.",
        image: "/products/instrumentation_products/product-6.png",
        features: [
          "Wide input range.",
          "High accuracy.",
          "Easy installation.",
        ],
      },
    ],
  },
  mechanical: {
    title: "Mechanical Products",
    description: "Browse our selection of high-quality mechanical products for various industrial applications.",
    products: [
      {
        title: "Bearings",
        description: "High-quality bearings designed for various industrial applications.",
        image: "/products/mechanical_products/product-1.png",
        features: [
          "Low friction and high durability.",
          "Available in different sizes.",
          "Engineered for heavy-duty use.",
        ],
      },
      {
        title: "Gearboxes",
        description: "Precision-engineered gearboxes for high-efficiency power transmission.",
        image: "/products/mechanical_products/product-2.png",
        features: [
          "Robust construction.",
          "Available in multiple gear ratios.",
          "Optimized for minimal noise.",
        ],
      },
      {
        title: "Hydraulic Cylinders",
        description: "Reliable hydraulic cylinders for industrial machinery and equipment.",
        image: "/products/mechanical_products/product-3.png",
        features: [
          "High-pressure resistance.",
          "Precision seals.",
          "Customizable stroke lengths.",
        ],
      },
      {
        title: "Couplings",
        description: "Durable couplings for efficient power transmission.",
        image: "/products/mechanical_products/product-4.png",
        features: [
          "High torque capacity.",
          "Easy installation.",
          "Maintenance-free operation.",
        ],
      },
      {
        title: "Pulleys",
        description: "High-quality pulleys for smooth and efficient power transmission.",
        image: "/products/mechanical_products/product-5.png",
        features: [
          "Precision machining.",
          "High load capacity.",
          "Corrosion-resistant materials.",
        ],
      },
      {
        title: "Chains",
        description: "Durable chains for various industrial applications.",
        image: "/products/mechanical_products/product-6.png",
        features: [
          "High tensile strength.",
          "Available in different sizes.",
          "Long service life.",
        ],
      },
    ],
  },
  automation: {
    title: "Automation Products",
    description: "Explore our range of advanced automation products for efficient industrial automation.",
    products: [
      {
        title: "PLC Controllers",
        description: "Programmable Logic Controllers for industrial automation and process control.",
        image: "/products/automation_products/product-1.png",
        features: [
          "Supports multiple input/output configurations.",
          "Advanced programming capabilities.",
          "Highly reliable operation.",
        ],
      },
      {
        title: "Industrial Robots",
        description: "High-performance industrial robots for manufacturing and automation.",
        image: "/products/automation_products/product-2.png",
        features: [
          "Fast and precise movement.",
          "Multiple axis configurations.",
          "Easy integration with existing systems.",
        ],
      },
      {
        title: "SCADA Systems",
        description: "Supervisory Control and Data Acquisition systems for monitoring and control.",
        image: "/products/automation_products/product-3.png",
        features: [
          "Real-time data collection.",
          "Remote access and control.",
          "Scalable solutions.",
        ],
      },
      {
        title: "HMI Panels",
        description: "User-friendly HMI panels for efficient machine control.",
        image: "/products/automation_products/product-4.png",
        features: [
          "Intuitive interface.",
          "High-resolution display.",
          "Multiple connectivity options.",
        ],
      },
      {
        title: "Sensors",
        description: "Advanced sensors for accurate detection and measurement.",
        image: "/products/automation_products/product-5.png",
        features: [
          "High sensitivity.",
          "Wide range of sensing technologies.",
          "Easy installation.",
        ],
      },
      {
        title: "Actuators",
        description: "Reliable actuators for precise control and movement.",
        image: "/products/automation_products/product-6.png",
        features: [
          "High force output.",
          "Compact design.",
          "Long service life.",
        ],
      },
    ],
  },
  safety: {
    title: "Safety Products",
    description: "Ensure workplace safety with our range of high-quality safety products.",
    products: [
      {
        title: "Safety Helmets",
        description: "Durable safety helmets for head protection in hazardous environments.",
        image: "/products/safety_products/product-1.png",
        features: [
          "Impact-resistant material.",
          "Adjustable straps for a secure fit.",
          "Comfortable and lightweight design.",
        ],
      },
      {
        title: "Safety Gloves",
        description: "Protective gloves for hand safety in various industrial applications.",
        image: "/products/safety_products/product-2.png",
        features: [
          "Cut-resistant material.",
          "Enhanced grip for better handling.",
          "Breathable and comfortable.",
        ],
      },
      {
        title: "Safety Goggles",
        description: "High-quality safety goggles for eye protection.",
        image: "/products/safety_products/product-3.png",
        features: [
          "Anti-fog coating.",
          "Scratch-resistant lenses.",
          "Adjustable headband.",
        ],
      },
      {
        title: "Ear Protection",
        description: "Effective ear protection for noisy environments.",
        image: "/products/safety_products/product-4.png",
        features: [
          "Noise reduction rating (NRR) of 30 dB.",
          "Comfortable fit.",
          "Durable construction.",
        ],
      },
      {
        title: "Safety Shoes",
        description: "Sturdy safety shoes for foot protection.",
        image: "/products/safety_products/product-5.png",
        features: [
          "Steel toe cap.",
          "Slip-resistant sole.",
          "Comfortable and durable.",
        ],
      },
      {
        title: "High-Visibility Vests",
        description: "High-visibility vests for enhanced safety in low-light conditions.",
        image: "/products/safety_products/product-6.png",
        features: [
          "Reflective strips for visibility.",
          "Lightweight and breathable.",
          "Adjustable fit.",
        ],
      },
    ],
  },
};

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
        {categoryDetails.products.map((product: Product, index: number) => (
          <div
            className="flex flex-col md:flex-row items-center mb-4 bg-white shadow-md rounded-lg overflow-hidden"
            key={index}
          >
            <div
              className="md:w-1/2 p-2"
              data-aos="zoom-out"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <img
                src={product.image}
                className="w-full h-auto object-cover"
                alt={product.title}
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
                {product.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="bi bi-check mr-1"></i>
                    <span>{feature}</span>
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