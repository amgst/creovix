import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Platforms } from "./components/Platforms";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Platforms />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}