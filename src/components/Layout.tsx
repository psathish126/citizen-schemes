import { ReactNode } from "react";
import { Search, Menu, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              1800-11-1234
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              help@govschemes.in
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-3 w-3" />
            <select className="bg-transparent text-primary-foreground text-sm border-0 outline-0">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🏛️</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Citizen Schemes Portal
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Government of India
                  </p>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/schemes" className="text-foreground hover:text-primary transition-colors">
                All Schemes
              </a>
              <a href="/schemes" className="text-foreground hover:text-primary transition-colors">
                Categories
              </a>
              <a href="/schemes" className="text-foreground hover:text-primary transition-colors">
                News & Updates
              </a>
              <a href="/schemes" className="text-foreground hover:text-primary transition-colors">
                Help
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button className="md:hidden" variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/schemes" className="hover:underline">All Schemes</a></li>
                <li><a href="/categories" className="hover:underline">Categories</a></li>
                <li><a href="/eligibility" className="hover:underline">Check Eligibility</a></li>
                <li><a href="/apply" className="hover:underline">How to Apply</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/categories/education" className="hover:underline">Education</a></li>
                <li><a href="/categories/healthcare" className="hover:underline">Healthcare</a></li>
                <li><a href="/categories/employment" className="hover:underline">Employment</a></li>
                <li><a href="/categories/agriculture" className="hover:underline">Agriculture</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li><a href="/feedback" className="hover:underline">Feedback</a></li>
                <li><a href="/accessibility" className="hover:underline">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
                <li><a href="/rti" className="hover:underline">RTI</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};