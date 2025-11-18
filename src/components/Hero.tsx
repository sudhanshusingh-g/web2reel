import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <Badge
            variant="secondary"
            className="bg-indigo-100 text-indigo-700 border-indigo-200 gap-1"
          >
            <Sparkles className="w-3 h-3" />
            AI-Powered Video Generation
          </Badge>

          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-slate-900 tracking-tight">
              Transform Any URL Into
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Stunning Videos with AI
              </span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Create professional, engaging videos from any web content in
              seconds. No editing skills required. Just paste a URL and let our
              AI do the magic.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="https://example.com/your-content"
                className="flex-1 h-12 px-4 border-slate-300 bg-white"
              />
              <Button className="h-12 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Generate Video
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-slate-500">
              No credit card required • Free trial available
            </p>
          </div>

          <div className="pt-8">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=675&fit=crop"
                  alt="Video preview"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-indigo-600 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
