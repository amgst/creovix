import { Mail, Phone, MapPin, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-xl font-bold">WebFlow Pro</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses across Australia and USA with affordable, 
              professional websites since 2020.
            </p>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-300">4.9/5 from 10,000+ customers</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">E-commerce Solutions</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Website Maintenance</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">AI Content Creation</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Premium Hosting</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#faq" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="https://www.fiverr.com/adilsoft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Fiverr Chat</a></li>
              <li><a href="mailto:hello@webflowpro.com" className="hover:text-white transition-colors">Email Support</a></li>
              <li><a href="https://upwork.com/freelancers/azammunir" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Upwork Contact</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Tutorials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Money-Back Guarantee</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-gray-300">Australia: 1300 123 456</div>
                  <div className="text-gray-300">USA: 1-800-123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div className="text-gray-300">hello@webflowpro.com</div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <div>Sydney, Australia</div>
                  <div>San Francisco, USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 WebFlow Pro. All rights reserved. 
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-700 text-green-300 px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>All systems operational • 99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}