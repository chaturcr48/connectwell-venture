import React from 'react';
import ContactForm from './contact-form';

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-balance">Contact Us</h1>
      <p className="mb-8 text-center text-pretty w-full mx-0 md:w-3/4 md:mx-auto">
        We would love to hear from you! Whether you have a question about our products, need assistance, or just want to give feedback, feel free to reach out to us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p className="mb-4">
            <strong>Connectwell Ventures</strong><br />
            1234 Main Street<br />
            Suite 500<br />
            Anytown, AN 12345<br />
            United States
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> (123) 456-7890<br />
            <strong>Email:</strong> <a href="mailto:info@connectwell.com" className="text-blue-500">info@connectwell.com</a>
          </p>
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <p>
            <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM<br />
            <strong>Saturday:</strong> 10:00 AM - 2:00 PM<br />
            <strong>Sunday:</strong> Closed
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484927!2d-122.419415484681!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f074d6b%3A0x8c2f074d6b!2s1234%20Main%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
          className="border-0 rounded-md shadow-md"
        ></iframe>
      </div>
    </div>
  );
}