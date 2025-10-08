import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Website Project Inquiry - ${formData.business}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}

Please reply with next steps for our $200 website package.
    `.trim();
    
    const mailtoLink = `mailto:hello@webflowpro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600">
              Get a free consultation and project quote. Multiple ways to reach us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  Get Your Free Quote
                </CardTitle>
                <p className="text-gray-600">Tell us about your project and we'll get back to you within 2 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Your Name *</label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Email Address *</label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@business.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Business Name</label>
                    <Input 
                      value={formData.business}
                      onChange={(e) => handleInputChange('business', e.target.value)}
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Project Type</label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business-website">Business Website</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                          <SelectItem value="portfolio">Portfolio/Personal</SelectItem>
                          <SelectItem value="restaurant">Restaurant/Food</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="professional">Professional Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When needed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (Rush +$100)</SelectItem>
                          <SelectItem value="1-week">Within 1 week</SelectItem>
                          <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Project Details</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your business, what pages you need, any specific features, or questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6">
                    Send Project Details & Get Quote
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 2 hours with your custom quote and timeline.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Alternative Contact Methods */}
            <div className="space-y-6">
              <Card className="border-2 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl">Order on Fiverr</h3>
                      <p className="text-green-600">Level 2 Seller • 2,500+ Orders</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Quick ordering process with instant communication. Perfect for standard websites.
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://www.fiverr.com/adilsoft', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Order on Fiverr
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <h3 className="text-xl">Hire on Upwork</h3>
                      <p className="text-blue-600">Top Rated Plus • 100% Success</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Best for custom projects and ongoing maintenance contracts. Enterprise-level security.
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('https://upwork.com/freelancers/azammunir', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Hire on Upwork
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl">Direct Contact</h3>
                      <p className="text-purple-600">Same day response guaranteed</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p>📧 hello@webflowpro.com</p>
                    <p>🇦🇺 Australia: 1300 123 456</p>
                    <p>🇺🇸 USA: 1-800-123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-lg">Rush Delivery Available</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Need your website in 24-48 hours? We offer express delivery for an additional $100. 
                  Contact us for rush projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}