import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-purple-600 to-indigo-700 p-12 md:p-16">
          <div className="absolute inset-0 bg-grid-white/10 mask-[linear-gradient(0deg,transparent,white)]"></div>

          <div className="relative text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white">Limited Time Offer</span>
            </div>

            <h2 className="text-white">Start creating videos today</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              Join thousands of creators who are already using VideoAI to create
              stunning videos from any URL. Get started for free, no credit card
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 h-12 px-8"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8"
              >
                View Pricing
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-white">10,000+</div>
                <div>Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-white">500+</div>
                <div>Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-white">4.9/5</div>
                <div>Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
