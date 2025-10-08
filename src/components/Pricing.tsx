import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Crown, Star } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No contracts, no hidden fees. Pay once to get started, then just $4/month for maintenance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Competitor Comparison */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <CardTitle className="text-2xl">Traditional Web Agencies</CardTitle>
                <p className="text-gray-600">What others charge</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Website Development</span>
                    <span className="text-red-600">$3,000 - $10,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hosting (yearly)</span>
                    <span className="text-red-600">$120 - $300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SSL Certificate</span>
                    <span className="text-red-600">$100/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Stock Images</span>
                    <span className="text-red-600">$200 - $500/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Content Writing</span>
                    <span className="text-red-600">$500 - $2,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Maintenance</span>
                    <span className="text-red-600">$100 - $300/month</span>
                  </div>
                  <div className="border-t pt-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span>Total First Year</span>
                      <span className="text-2xl text-red-600">$5,000+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Offer */}
            <Card className="border-2 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-bl-xl">
                <div className="flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  <span className="text-sm">BEST VALUE</span>
                </div>
              </div>
              
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  WebFlow Pro Package
                </CardTitle>
                <p className="text-gray-600">Everything included</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {[
                    "Professional Website Development",
                    "Premium Hosting (FREE Forever)",
                    "SSL Certificate (FREE Forever)", 
                    "Unlimited AI Images (FREE Forever)",
                    "AI Content Writing (FREE Forever)",
                    "24/7 Support & Maintenance"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        $200 One-Time
                      </div>
                      <div className="text-gray-600">+ $4/month maintenance</div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="text-green-800">
                        <div>💰 Save $4,800+ in Year 1</div>
                        <div className="text-sm text-green-600 mt-1">Compared to traditional agencies</div>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                    >
                      Get Started Today - $200
                    </Button>
                    
                    <p className="text-sm text-gray-500">
                      30-day money-back guarantee • No setup fees • Cancel anytime
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-3 rounded-full">
              <span className="text-xl">⚡</span>
              <span>Limited Time: Launch special for Australian & US businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}