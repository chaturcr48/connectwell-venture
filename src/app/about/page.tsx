import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Connectwell Ventures</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Welcome to Connectwell Ventures! We are a leading provider of high-quality products and solutions for various
        industrial applications. Our mission is to deliver exceptional value to our customers through innovative
        products, reliable services, and a commitment to excellence.
      </p>

      <Tabs defaultValue="history" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="history">Our History</TabsTrigger>
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="values">Our Values</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
            </CardHeader>
            <CardContent>
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
        </TabsContent>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our mission is to provide innovative and reliable products that meet the evolving needs of our
                customers. We strive to achieve this by:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Delivering high-quality products that exceed customer expectations.</li>
                <li>Continuously improving our processes and technologies.</li>
                <li>Building long-term relationships with our customers and partners.</li>
                <li>Maintaining a strong commitment to sustainability and social responsibility.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
            </CardHeader>
            <CardContent>
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
        </TabsContent>
        <TabsContent value="values">
          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our values are the foundation of everything we do at Connectwell Ventures. They guide our actions,
                decisions, and interactions with our customers, partners, and communities. Our core values include:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Integrity:</strong> We conduct our business with the highest ethical standards and
                  transparency.
                </li>
                <li>
                  <strong>Excellence:</strong> We strive for excellence in everything we do, from product quality to
                  customer service.
                </li>
                <li>
                  <strong>Innovation:</strong> We embrace innovation and continuously seek new ways to improve and grow.
                </li>
                <li>
                  <strong>Customer Focus:</strong> We put our customers at the center of everything we do and work
                  tirelessly to meet their needs.
                </li>
                <li>
                  <strong>Teamwork:</strong> We believe in the power of teamwork and collaboration to achieve our goals.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you have any questions or would like to learn more about Connectwell Ventures, please don't hesitate to
            reach out to us. We are here to help and look forward to hearing from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" /> Email Us
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
