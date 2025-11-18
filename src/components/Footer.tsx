import { VideoIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <VideoIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white">VideoAI</span>
            </div>
            <p className="text-slate-400">
              Transform any URL into stunning videos with the power of AI.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">© 2025 VideoAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
