import React from 'react';
import ContactForm from './contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Clock, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-balance">Contact Us</h1>
      <p className="mb-8 text-center text-pretty w-full mx-0 md:w-3/4 md:mx-auto lg:w-1/2">
        We would love to hear from you! Whether you have a question about our products, need assistance, or just want to give feedback, feel free to reach out to us.
      </p>
      <div className="flex flex-col gap-y-8 w-full mx-auto md:w-4/5 lg:w-3/5" >
        <div className='flex flex-col gap-x-5 gap-y-5 md:flex-row' >
          <div className='basis-1/2' >
            <h2 className="text-2xl font-semibold mb-3">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div className='h-[400px] basis-1/2 md:h-auto'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484927!2d-122.419415484681!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f074d6b%3A0x8c2f074d6b!2s1234%20Main%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="border-0 rounded-md shadow-md h-[400px] md:h-full"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-wrap justify-center *:flex-1 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <CardTitle>Our Office</CardTitle>
            </CardHeader>
            <CardContent className="*:text-nowrap">
              <p>123 Business Street</p>
              <p>Suite 456</p>
              <p>Cityville, State 78901</p>
              <p>United States</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Phone className="h-6 w-6" />
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <p className="text-nowrap" >+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <p className="text-nowrap" >info@example.com</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Clock className="h-6 w-6" />
              <CardTitle>Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="*:text-nowrap">
              <p>Monday - Friday</p>
              <p>10:00 AM - 7:00 PM</p>
              <p>Saturday - Sunday</p>
              <p>Closed</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}