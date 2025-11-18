import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Palette, Download, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Advanced AI algorithms analyze your content and create visually stunning videos automatically",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate professional videos in seconds, not hours. Save time and focus on what matters",
  },
  {
    icon: Palette,
    title: "Multiple Styles",
    description:
      "Choose from cinematic, modern, minimal, and more styles to match your brand",
  },
  {
    icon: Download,
    title: "HD Quality",
    description:
      "Export in 720p, 1080p, or 4K resolution for any platform or device",
  },
  {
    icon: Globe,
    title: "Universal Format",
    description:
      "Works with any URL - articles, products, blogs, or landing pages",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your content is processed securely with enterprise-grade encryption",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-slate-900">
            Everything you need to create amazing videos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to help you create professional videos
            effortlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-slate-200 hover:border-indigo-200 transition-colors"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
