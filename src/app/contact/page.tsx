import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">
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
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </form>
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