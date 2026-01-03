import heroImage from '@assets/TUR_4__1767036886340.jpeg';
import operaHouse from '@assets/stock_images/elegant_opera_house__eeb33555.jpg';
import maestroConducting from '@assets/P1000457_1766181097631.jpeg';
import zelleQR from '@assets/image_1767036056896.png';
import morrisRobinson from '@assets/image_1767038728031.png';
import jonathanTetelman from '@assets/image_1767039049084.png';
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [heroLoaded, setHeroLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDonate = () => {
    toast({
      title: "Donation Information",
      description: "Please use Zelle for donations. Details provided below.",
    });
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We will get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-neutral-900 transition-opacity duration-1000 ${heroLoaded ? 'opacity-0' : 'opacity-100'}`} />
          <img 
            src={heroImage} 
            alt="Dramatic Opera Singer" 
            onLoad={() => setHeroLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-1000 ${heroLoaded ? 'opacity-80 blur-0 scale-100' : 'opacity-0 blur-xl scale-105'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        </div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
              STUDIO LIRICO <br/> NYC
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Where tradition meets the contemporary audience.
            </p>
          </motion.div>
        </div>

        {/* Buttons on sides - hidden on mobile, visible on medium+ screens */}
        <div className="hidden md:flex absolute left-8 bottom-16 z-20 flex-col items-center">
             <div className="w-16 h-[2px] bg-primary mb-4" />
             <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg tracking-widest transition-all"
                onClick={() => setLocation("/programs")}
              >
                VIEW PROGRAMS
              </Button>
        </div>
        <div className="hidden md:flex absolute right-8 bottom-16 z-20 flex-col items-center">
             <div className="w-16 h-[2px] bg-primary mb-4" />
             <Button 
                size="lg" 
                variant="outline" 
                className="bg-black/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg tracking-widest transition-all"
                onClick={() => scrollToSection("support")}
              >
                SUPPORT US
              </Button>
        </div>

        {/* Mobile buttons - centered bottom */}
         <div className="md:hidden absolute bottom-12 left-0 right-0 flex flex-col gap-4 px-6 z-20">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none w-full py-6 text-lg tracking-widest transition-all"
                onClick={() => setLocation("/programs")}
              >
                VIEW PROGRAMS
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black rounded-none w-full py-6 text-lg tracking-widest transition-all"
                onClick={() => scrollToSection("support")}
              >
                SUPPORT US
              </Button>
        </div>
      </section>

      {/* Programs & Events - Moved Up */}
      <section id="programs" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Programs & Events</h2>
            <p className="text-muted-foreground">Masterclasses, Recitals, and Workshops.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-bold text-center mb-4 text-white/90">Masterclass Series</h3>
              <Card className="bg-card border-none rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                  {/* Background Image */}
                  <img 
                      src={morrisRobinson} 
                      alt="Morris Robinson" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                    <p className="text-primary text-sm tracking-widest mb-2 uppercase">January 2026</p>
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">Morris Robinson</h3>
                    <p className="text-white/80 text-sm mb-4">International Opera Star</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black rounded-none"
                      onClick={() => setLocation("/masterclass-morris-robinson")}
                    >
                      DETAILS
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-bold text-center mb-4 text-white/90">Masterclass Series</h3>
              <Card className="bg-card border-none rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                  {/* Background Image */}
                  <img 
                      src={jonathanTetelman} 
                      alt="Jonathan Tetelman" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                    <p className="text-primary text-sm tracking-widest mb-2 uppercase">May 2026</p>
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">Jonathan Tetelman</h3>
                    <p className="text-white/80 text-sm mb-4">International Opera Star</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black rounded-none"
                      onClick={() => {
                          toast({
                              title: "Coming Soon",
                              description: "Details for Jonathan Tetelman's masterclass will be announced shortly.",
                          });
                      }}
                    >
                      DETAILS
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About Preview */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                A Legacy of <span className="text-primary italic">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Preparing an opera singer is a hands on activity. You can't read a book, watch a video, or take a virtual lesson to acquire fundamental, indispensable skills. Teaching music, and especially singers, has always been an oral tradition.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our faculty brings decades of international performance experience to the studio to pass on the next generation. Our goal is to provide each student with the skills and information to maximize their full artistic potential.
              </p>
              <Button 
                variant="link" 
                className="text-primary p-0 text-lg hover:text-white transition-colors"
                onClick={() => setLocation("/mission")}
              >
                READ OUR MISSION &rarr;
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30 z-0" />
              <img 
                src={operaHouse} 
                alt="Elegant Opera House" 
                className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation / Support Section */}
      <section id="support" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src={maestroConducting} className="w-full h-full object-cover mix-blend-multiply" alt="Orchestra background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-black">Support the Arts</h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Your patronage ensures the future of opera in New York City. Join our circle of benefactors today.
          </p>
          <div className="max-w-md mx-auto bg-white p-10 border border-black/10 shadow-2xl relative">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/50" />

            <h3 className="text-2xl font-heading font-bold text-black mb-4">Make a Donation</h3>
            
            <p className="mb-8 text-black/70 font-medium leading-relaxed">
              We gratefully accept donations via Zelle.<br/>
              Scan to support Studio Lirico NYC.
            </p>

            <div className="flex justify-center mb-6">
              <div className="w-56 h-56 relative bg-white border-2 border-black/5 shadow-inner flex items-center justify-center overflow-hidden">
                 <img 
                  src={zelleQR} 
                  alt="Donate with Zelle QR Code" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
            
            <p className="text-xs text-black/40 uppercase tracking-widest font-semibold">
              Thank You
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                We invite you to reach out with any inquiries regarding upcoming productions, auditions, or patronage opportunities.
              </p>
              <p className="text-muted-foreground mb-8">
                We also welcome inquiries for artistic collaborations and partnerships. If you are an artist or organization interested in working with Studio Lirico NYC, please get in touch.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white mb-2">General Inquiries</h4>
                  <p className="text-muted-foreground text-lg">info@studioliriconyc.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Artistic Director</h4>
                  <p className="text-muted-foreground text-lg">direction@studioliriconyc.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Social Media</h4>
                  <div className="flex gap-4 text-muted-foreground">
                    <a href="https://www.facebook.com/StudioLiricoNYC/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
                    <span>•</span>
                    <a href="https://www.instagram.com/studio_lirico_nyc/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 border border-white/5">
              <form className="space-y-4" onSubmit={handleContact}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">First Name</label>
                    <Input className="bg-background border-white/10 rounded-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Last Name</label>
                    <Input className="bg-background border-white/10 rounded-none" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input type="email" className="bg-background border-white/10 rounded-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Message</label>
                  <Textarea className="bg-background border-white/10 min-h-[150px] rounded-none" required />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
