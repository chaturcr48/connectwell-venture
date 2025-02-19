import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-8">
        Welcome to Connectwell Ventures! We are a leading provider of high-quality products and solutions for various industrial applications. Our mission is to deliver exceptional value to our customers through innovative products, reliable services, and a commitment to excellence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="mb-4">
            Connectwell Ventures was founded in 2000 with a vision to provide top-notch products and services to the industrial sector. Over the years, we have grown into a trusted name in the industry, known for our commitment to quality and customer satisfaction.
          </p>
          <p>
            Our journey began with a small team of dedicated professionals who shared a common goal of making a difference in the industry. Today, we have expanded our operations globally, serving customers in various countries and industries.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission is to provide innovative and reliable products that meet the evolving needs of our customers. We strive to achieve this by:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Delivering high-quality products that exceed customer expectations.</li>
          <li>Continuously improving our processes and technologies.</li>
          <li>Building long-term relationships with our customers and partners.</li>
          <li>Maintaining a strong commitment to sustainability and social responsibility.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="mb-4">
          At Connectwell Ventures, we believe that our people are our greatest asset. Our team is composed of talented and dedicated professionals who are passionate about what they do. We foster a culture of collaboration, innovation, and continuous learning to ensure that we stay ahead of the curve.
        </p>
        <p>
          Our team members bring a wealth of experience and expertise to the table, enabling us to deliver exceptional value to our customers. We are committed to providing a supportive and inclusive work environment where everyone can thrive and achieve their full potential.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <p>
          Our values are the foundation of everything we do at Connectwell Ventures. They guide our actions, decisions, and interactions with our customers, partners, and communities. Our core values include:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards and transparency.</li>
          <li><strong>Excellence:</strong> We strive for excellence in everything we do, from product quality to customer service.</li>
          <li><strong>Innovation:</strong> We embrace innovation and continuously seek new ways to improve and grow.</li>
          <li><strong>Customer Focus:</strong> We put our customers at the center of everything we do and work tirelessly to meet their needs.</li>
          <li><strong>Teamwork:</strong> We believe in the power of teamwork and collaboration to achieve our goals.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about Connectwell Ventures, please don't hesitate to reach out to us. We are here to help and look forward to hearing from you.
        </p>
        <p className="mt-4">
          <strong>Email:</strong> <a href="mailto:info@connectwell.com" className="text-blue-500">info@connectwell.com</a><br />
          <strong>Phone:</strong> (123) 456-7890
        </p>
      </div>
    </div>
  );
}