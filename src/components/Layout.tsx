import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import farmSevakLogo from '../assets/FarmSevak11.jpg'; 


export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Predict", href: "https://farmsevakprediction.streamlit.app/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    location.pathname === href ||
    (href !== "/" && location.pathname.startsWith(href));

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="relative bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
             <img
                src={farmSevakLogo}
                alt="FarmSevak Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />


              <span className="font-poppins font-bold text-xl text-foreground">
                FarmSevak
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) =>
                item.href.startsWith("http") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter font-medium transition-colors duration-200 text-foreground hover:text-primary"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-inter font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <LanguageToggle />
              <a
                href="https://farmsevak.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 rounded-lg text-white font-medium transition-transform hover:scale-105"
              >
                🤖SevakBot
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
              <div className="px-4 py-2 space-y-2">
                {navigation.map((item) =>
                  item.href.startsWith("http") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-md font-inter font-medium text-foreground hover:text-primary hover:bg-primary/5"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md font-inter font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="pt-2 border-t border-border">
                  <Button className="btn-primary w-full">Try Demo</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer Logo */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="src/assets/FarmSevak11.jpg"
                  alt="FarmSevak Logo"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="font-poppins font-bold text-xl">FarmSevak</span>
              </div>
              <p className="text-primary-foreground/80 max-w-md">
                Empowering farmers with AI-driven insights for better yield predictions and optimized farming practices.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) =>
                  item.href.startsWith("http") ? (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground/80 hover:text-primary-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Support / Team */}
            <div>
              <h3 className="font-poppins font-semibold mb-4">Our Team</h3>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/in/jainam-porwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground">Jainam Porwal</a></li>
                <li><a href="https://www.linkedin.com/in/himanshu-mali701?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground">Himanshu Mali</a></li>
                <li><a href="https://www.linkedin.com/in/tanishq-lodha-000561329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  className="text-primary-foreground/80 hover:text-primary-foreground">Tanishq Lodha</a></li>
                <li><a href="https://www.linkedin.com/in/bhavini-badgujar-23697a353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  className="text-primary-foreground/80 hover:text-primary-foreground">Bhavini Badgujar</a></li>
                <li><a href="https://www.linkedin.com/in/nency-rana-a22454376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground">Nency Rana</a></li>
                <li><a href="https://www.linkedin.com/in/joy-bhatt-9686b0287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground">Joy Bhatt</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2025 FarmSevak. Made by CodeDrifter.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
