import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <span className="text-xl font-bold">WebFlow Pro</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#platforms" className="text-gray-600 hover:text-gray-900 transition-colors">Platforms</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-600">Features</a>
              <a href="#pricing" className="text-gray-600">Pricing</a>
              <a href="#platforms" className="text-gray-600">Platforms</a>
              <a href="#testimonials" className="text-gray-600">Reviews</a>
              <a href="#faq" className="text-gray-600">FAQ</a>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}