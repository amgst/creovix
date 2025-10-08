import { Card, CardContent } from "./ui/card";
import { Star, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Platforms() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Trusted Across Multiple Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find us on the world's leading freelance platforms with thousands of satisfied customers 
            and top-rated reviews. Same great service, multiple ways to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Fiverr */}
          <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-2xl text-green-700">Fiverr</h3>
                      <p className="text-green-600">Top Rated Seller</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">4.9/5 Rating</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-green-50 rounded-xl p-3">
                      <div className="text-2xl text-green-700">2,500+</div>
                      <div className="text-sm text-green-600">Orders Completed</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <div className="text-2xl text-green-700">Level 2</div>
                      <div className="text-sm text-green-600">Seller Status</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <div className="text-2xl text-green-700">99%</div>
                      <div className="text-sm text-green-600">On-Time Delivery</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Express 24-hour delivery available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Verified Pro with badges</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Same $200 pricing guaranteed</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://www.fiverr.com/adilsoft', '_blank')}
                  >
                    View Our Fiverr Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upwork */}
          <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <h3 className="text-2xl text-blue-700">Upwork</h3>
                      <p className="text-blue-600">Top Rated Plus</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">4.98/5 Rating</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="text-2xl text-blue-700">1,800+</div>
                      <div className="text-sm text-blue-600">Jobs Completed</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="text-2xl text-blue-700">$250K+</div>
                      <div className="text-sm text-blue-600">Total Earned</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="text-2xl text-blue-700">100%</div>
                      <div className="text-sm text-blue-600">Job Success</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Enterprise-level clients served</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Upwork verified identity & skills</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Long-term contracts available</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('https://upwork.com/freelancers/azammunir', '_blank')}
                  >
                    View Our Upwork Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl">Why Choose Platform Verified Sellers?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our presence on Fiverr and Upwork provides additional security, verified reviews, 
                and platform protection. Whether you order directly or through these platforms, 
                you'll get the same exceptional service at the same great price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => window.open('https://www.fiverr.com/adilsoft', '_blank')}
                >
                  Browse Fiverr Gigs
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => window.open('https://upwork.com/freelancers/azammunir', '_blank')}
                >
                  View Upwork Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}