import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import generatedImage from '@assets/generated_images/minimalist_gold_and_black_opera_logo_symbol.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      setLocation("/");
      // Short timeout to allow navigation to home before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/", action: () => setLocation("/") },
    { name: "Mission", href: "/mission", action: () => setLocation("/mission") },
    { name: "Programs", href: "/programs", action: () => setLocation("/programs") },
    { name: "Support", action: () => scrollToSection("support") },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-4 group">
            <img src={generatedImage} alt="Studio Lirico NYC Logo" className="h-20 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold tracking-widest text-foreground group-hover:text-primary transition-colors leading-none">
                STUDIO LIRICO
              </span>
              <span className="text-xs tracking-[0.3em] text-primary font-medium text-center">NYC</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className={cn(
                "text-sm tracking-widest uppercase font-medium hover:text-primary transition-colors relative group bg-transparent border-none cursor-pointer",
                location === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-6"
            onClick={() => scrollToSection("support")}
          >
            SUPPORT
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="text-lg font-heading text-left text-foreground hover:text-primary bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="w-full bg-primary text-primary-foreground rounded-none mt-4"
            onClick={() => scrollToSection("support")}
          >
            SUPPORT
          </Button>
        </div>
      )}
    </nav>
  );
}
