import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is the $200 really all I pay upfront?",
      answer: "Yes! $200 covers your complete professional website including design, development, premium hosting setup, SSL certificate, AI-generated content, and professional images. The only ongoing cost is $4/month for maintenance and updates."
    },
    {
      question: "What exactly is included in the $4/month maintenance?",
      answer: "Your $4/month covers: software updates, security monitoring, daily backups, uptime monitoring, technical support, content updates (up to 2 hours/month), performance optimization, and SSL renewal. Essentially, everything to keep your site running perfectly."
    },
    {
      question: "How long does it take to build my website?",
      answer: "Most websites are completed within 5-7 business days. We'll provide you with a staging link within 48 hours so you can see progress. Rush delivery (2-3 days) is available for an additional $100."
    },
    {
      question: "Do I own my website and domain?",
      answer: "Absolutely! You own your domain name, all content, and have full rights to your website. We provide hosting as a service, but you can migrate your site elsewhere anytime if needed (though we hope you'll love our service!)."
    },
    {
      question: "What if I'm not happy with my website?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your $200 no questions asked. We also provide unlimited revisions during the initial build process."
    },
    {
      question: "Is this really cheaper than other options?",
      answer: "Yes! Traditional agencies charge $3,000-$10,000 upfront plus $100-$300/month ongoing. Even DIY platforms like Squarespace cost $18-$40/month plus you have to build it yourself. Our total first-year cost is just $248 vs $1,500+ elsewhere."
    },
    {
      question: "What types of websites can you build?",
      answer: "We build all types of business websites: corporate sites, e-commerce stores, portfolios, restaurants, professional services, real estate, fitness, beauty, consulting, and more. If you have specific needs, just ask!"
    },
    {
      question: "Do you provide hosting in Australia and USA?",
      answer: "Yes! We have premium hosting infrastructure in both Australia (Sydney) and USA (multiple locations). Your website will load lightning-fast for visitors in both countries with 99.9% uptime guarantee."
    },
    {
      question: "Can I cancel the maintenance plan?",
      answer: "Yes, you can cancel anytime with 30 days notice. However, you'll lose the free hosting, SSL, and support. Most clients find the $4/month incredibly valuable compared to paying $10-$30/month elsewhere just for hosting."
    },
    {
      question: "Do you handle SEO and mobile optimization?",
      answer: "Absolutely! Every website includes: mobile responsiveness, fast loading speeds, SEO-optimized structure, meta tags, sitemap, Google Analytics setup, and Google Search Console integration. We follow all Google best practices."
    },
    {
      question: "What about e-commerce functionality?",
      answer: "E-commerce setup is included! We integrate with Stripe, PayPal, and other payment processors. Shopping cart, product pages, checkout process, and inventory management are all included in your $200 package."
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer: "No contracts! Pay $200 to get started, then $4/month ongoing. Cancel anytime with 30 days notice. We keep our prices low and service high because we want you to stay by choice, not contract."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our web services. Can't find what you're looking for? 
            Contact our Australian support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl px-6 py-2"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 inline-block">
            <h3 className="text-xl mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our Australian support team is here to help. Get answers in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300">
                Chat with Support
              </button>
              <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl transition-all duration-300">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}