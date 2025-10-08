import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Sydney Consulting",
      location: "Sydney, Australia",
      platform: "Fiverr",
      rating: 5,
      text: "Found them on Fiverr and couldn't be happier! Incredible value - we saved over $5,000 compared to other agencies. Our website looks professional and generates leads daily.",
      savings: "$5,200 saved"
    },
    {
      name: "Mike Rodriguez", 
      business: "Austin Marketing Co",
      location: "Austin, Texas",
      platform: "Upwork",
      rating: 5,
      text: "Hired through Upwork for a long-term contract. The $4/month maintenance is amazing - they handle everything! Best investment we've made for our business.",
      savings: "$2,800 saved annually"
    },
    {
      name: "Emma Thompson",
      business: "Melbourne Fitness",
      location: "Melbourne, Australia",
      platform: "Direct",
      rating: 5,
      text: "From $200 to a fully functional website in 5 days! The free hosting and SSL gives us peace of mind. Their Australian support team is fantastic.",
      savings: "$4,500 saved"
    },
    {
      name: "David Chen",
      business: "Tech Solutions LLC",
      location: "San Francisco, USA",
      platform: "Fiverr",
      rating: 5,
      text: "Ordered through Fiverr and got express delivery! We've been paying $300/month for hosting alone. Now we get everything for $4/month!",
      savings: "$3,600 saved annually"
    },
    {
      name: "Lisa Parker",
      business: "Brisbane Real Estate",
      location: "Brisbane, Australia",
      platform: "Upwork",
      rating: 5,
      text: "Found them as Top Rated Plus on Upwork. The ROI is incredible - our new website has increased leads by 300%. Best business decision ever!",
      savings: "300% more leads"
    },
    {
      name: "Jason Williams",
      business: "Miami Restaurants",
      location: "Miami, Florida",
      platform: "Direct",
      rating: 5,
      text: "Professional design, lightning fast, and the ongoing support is excellent. They've saved us thousands and our customers love the new site.",
      savings: "$6,000 saved"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Join 10,000+ Happy Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Businesses across Australia and USA are saving thousands while getting better results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-blue-200" />
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.business}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                        <div className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full mt-1 inline-block">
                          via {testimonial.platform}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {testimonial.savings}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl mb-4">
                Ready to Join Them?
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Start your website today and see why thousands of businesses choose WebFlow Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300">
                  Get Started - $200
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl transition-all duration-300">
                  View More Reviews
                </button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1626105985445-6430a31f6f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBzdWNjZXNzfGVufDF8fHx8MTc1OTc0MjM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy business team"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}