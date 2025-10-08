import { Button } from "./ui/button";
import { CheckCircle, Clock, Shield } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl">
                Ready to Launch Your Website?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join thousands of Australian and US businesses saving money while getting better results. 
                Your professional website is just one click away.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Clock className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-white">5-7 Day Delivery</div>
                  <div className="text-sm text-blue-100">Rush available</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Shield className="w-6 h-6 text-green-300 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-white">30-Day Guarantee</div>
                  <div className="text-sm text-blue-100">Risk-free</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-white">Everything Included</div>
                  <div className="text-sm text-blue-100">No hidden fees</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl">Special Launch Pricing</h3>
                    <div className="space-y-2">
                      <div className="text-lg line-through text-blue-200">Regular: $500 + $20/month</div>
                      <div className="text-3xl">Today: $200 + $4/month</div>
                      <div className="text-green-300">You Save: $364 in Year 1</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      className="w-full bg-white text-blue-600 hover:bg-gray-100 text-xl py-6"
                    >
                      Start Your Website - $200
                    </Button>
                    <p className="text-sm text-blue-100">
                      Secure payment • No setup fees • 30-day guarantee
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ Professional Design & Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ Free Premium Hosting Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ Free SSL Certificate Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ Unlimited AI Images & Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ Mobile Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ SEO Optimization Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ 24/7 Australian Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>✅ Ongoing Maintenance Included</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-blue-100">
                🇦🇺 Proudly serving Australian and US businesses • 🇺🇸 Local support teams • 💪 10,000+ happy customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}