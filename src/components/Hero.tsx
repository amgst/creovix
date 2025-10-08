import { Button } from "./ui/button";
import { CheckCircle, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 10,000+ businesses</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight">
                Launch Your 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Professional Website</span> 
                <br />for Just $200
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to dominate online: Free hosting, SSL, AI-generated content, 
                professional images, and ongoing maintenance for only $4/month. 
                <strong>Perfect for Australian & US businesses.</strong>
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Free Premium Hosting (Worth $120/year)",
                "Free SSL Certificate (Worth $100/year)", 
                "Free AI Images & Content (Worth $200/year)",
                "Professional Design & Development",
                "Ongoing Maintenance for $4/month"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              >
                Start Your Website Today - $200
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-2"
              >
                See Live Examples
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white" />
                  ))}
                </div>
                <span>Join 10,000+ happy customers</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1">4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Fiverr Pro</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Upwork Top Rated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1675495666895-9091741bfd78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjB3ZWJzaXRlfGVufDF8fHx8MTc1OTc2MjA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional web development"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}