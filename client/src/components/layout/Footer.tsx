import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail } from "lucide-react";
import generatedImage from '@assets/generated_images/minimalist_gold_and_black_opera_logo_symbol.png';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground pt-20 pb-10 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <img src={generatedImage} alt="Studio Lirico NYC Logo" className="h-16 w-auto" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-heading font-bold tracking-widest leading-none">
                  STUDIO LIRICO
                </h3>
                <span className="text-sm tracking-[0.3em] text-primary font-bold">NYC</span>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Dedicated to the preservation and advancement of the operatic art form through world-class productions and the cultivation of exceptional vocal talent.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/StudioLiricoNYC/" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-primary hover:text-primary transition-colors rounded-full">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/studio_lirico_nyc/" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-primary hover:text-primary transition-colors rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-primary">CONTACT</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>info@studioliriconyc.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-primary">NEWSLETTER</h4>
            <p className="text-sm text-muted-foreground">Subscribe for season updates and exclusive invitations.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email Address" 
                className="bg-transparent border-white/20 focus:border-primary rounded-none"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
                <Mail size={16} />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Studio Lirico NYC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
