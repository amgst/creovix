import { Card, CardContent } from "./ui/card";
import { Shield, Zap, Image, FileText, Server, Headphones } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Server,
      title: "Premium Hosting Included",
      description: "99.9% uptime guarantee with lightning-fast servers in Australia and USA. Worth $120/year - yours free forever.",
      value: "$120/year VALUE"
    },
    {
      icon: Shield,
      title: "Free SSL Certificate", 
      description: "Bank-level security for your website. Boost trust and SEO rankings with professional SSL encryption.",
      value: "$100/year VALUE"
    },
    {
      icon: Image,
      title: "AI-Generated Images",
      description: "Unlimited professional stock photos and AI-generated images. Never worry about licensing or costs again.",
      value: "$200/year VALUE"
    },
    {
      icon: FileText,
      title: "AI Content Creation",
      description: "Professional copywriting, SEO-optimized content, and engaging blog posts written by advanced AI.",
      value: "$300/year VALUE"
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with CDN delivery, mobile responsiveness, and Google Core Web Vitals compliance.",
      value: "PRICELESS"
    },
    {
      icon: Headphones,
      title: "24/7 Australian Support",
      description: "Local support team available around the clock. Email, chat, and phone support included.",
      value: "INCLUDED"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've bundled premium services worth over $720/year into one affordable package. 
            No hidden fees, no surprises - just everything you need to dominate your market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl">{feature.title}</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {feature.value}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl px-8 py-6">
            <div className="text-3xl">💰</div>
            <div>
              <h3 className="text-xl text-green-800">Total Value: $720+ per year</h3>
              <p className="text-green-600">Your price: Just $200 one-time + $4/month maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}