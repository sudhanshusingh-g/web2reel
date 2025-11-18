import { Card, CardContent } from "@/components/ui/card";
import { Link, Wand2, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Paste Your URL",
    description:
      "Simply paste the URL of any web content you want to turn into a video",
  },
  {
    number: "02",
    icon: Wand2,
    title: "AI Magic",
    description:
      "Our AI analyzes the content and generates a stunning video with your chosen style",
  },
  {
    number: "03",
    icon: Download,
    title: "Download & Share",
    description:
      "Preview your video and download it in your preferred quality to share anywhere",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-indigo-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-slate-900">How it works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Create professional videos in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 -z-10"></div>
                )}
                <Card className="border-slate-200 bg-white">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-indigo-200">
                        <span className="text-indigo-600">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-slate-900">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
