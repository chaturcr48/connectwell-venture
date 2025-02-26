import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Mail, Phone, Clock, Target, Users, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Connectwell Ventures</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Welcome to Connectwell Ventures! We are a leading provider of high-quality products and solutions for various
          industrial applications. Our mission is to deliver exceptional value to our customers through innovative
          products, reliable services, and a commitment to excellence.
        </p>

        <div className="space-y-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="flex items-center">
                <Clock className="mr-2" /> Our History
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="mb-4">
                Connectwell Ventures was founded in 2000 with a vision to provide top-notch products and services to the
                industrial sector. Over the years, we have grown into a trusted name in the industry, known for our
                commitment to quality and customer satisfaction.
              </p>
              <p>
                Our journey began with a small team of dedicated professionals who shared a common goal of making a
                difference in the industry. Today, we have expanded our operations globally, serving customers in
                various countries and industries.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="flex items-center">
                <Target className="mr-2" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="mb-4">
                Our mission is to provide innovative and reliable products that meet the evolving needs of our
                customers. We strive to achieve this by:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Delivering high-quality products that exceed customer expectations.</li>
                <li>Continuously improving our processes and technologies.</li>
                <li>Building long-term relationships with our customers and partners.</li>
                <li>Maintaining a strong commitment to sustainability and social responsibility.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="flex items-center">
                <Users className="mr-2" /> Our Team
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="mb-4">
                At Connectwell Ventures, we believe that our people are our greatest asset. Our team is composed of
                talented and dedicated professionals who are passionate about what they do. We foster a culture of
                collaboration, innovation, and continuous learning to ensure that we stay ahead of the curve.
              </p>
              <p>
                Our team members bring a wealth of experience and expertise to the table, enabling us to deliver
                exceptional value to our customers. We are committed to providing a supportive and inclusive work
                environment where everyone can thrive and achieve their full potential.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="flex items-center">
                <Heart className="mr-2" /> Our Values
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="mb-4">
                Our values are the foundation of everything we do at Connectwell Ventures. They guide our actions,
                decisions, and interactions with our customers, partners, and communities. Our core values include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Integrity", "Excellence", "Innovation", "Customer Focus", "Teamwork"].map((value) => (
                  <li key={value} className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full p-2 mr-3 mt-1">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <strong>{value}:</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        We uphold {value.toLowerCase()} in all our endeavors.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="mb-6">
                If you have any questions or would like to learn more about Connectwell Ventures, please don't hesitate
                to reach out to us. We are here to help and look forward to hearing from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className={buttonVariants({variant: "outline", className: "w-full sm:w-auto flex items-center justify-center"})} href="mailto:info@connectwell.com">
                  <Mail className="mr-2 h-4 w-4" /> info@connectwell.com
                </a>
                <a className={buttonVariants({variant: "outline", className: "w-full sm:w-auto flex items-center justify-center"})} href="tel:+918969057040">
                  <Phone className="mr-2 h-4 w-4" /> +91 8969057040
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
