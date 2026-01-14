import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import morrisRobinson from '@assets/PHOTO-2026-01-06-10-10-37_1767752923954.jpg';
import jonathanTetelman from '@assets/image_1767039049084.png';
import elizabethBlanckeBiggs from '@assets/EBB.jpg';
import ariaSeries from '@assets/Duo.jpg';
import stAnthonyChurch from '@assets/Screenshot_2026-01-03_at_3.34.35_PM_1767472478626.png';

export default function Programs() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Programs & Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our masterclasses, recitals, and workshops designed to cultivate the next generation of operatic talent.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-bold mb-12 border-l-4 border-primary pl-4">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Morris Robinson */}
            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-bold text-center mb-4 text-white/90">Masterclass Series</h3>
              <Card className="bg-card border-none rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                  <img 
                      src={morrisRobinson} 
                      alt="Morris Robinson" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <p className="text-primary text-sm tracking-widest mb-2 uppercase">January 2026</p>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">Morris Robinson</h3>
                    <p className="text-white/80 text-lg mb-6">International Opera Star</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black rounded-none py-6"
                      onClick={() => setLocation("/masterclass-morris-robinson")}
                    >
                      DETAILS
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Jonathan Tetelman */}
            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-bold text-center mb-4 text-white/90">Masterclass Series</h3>
              <Card className="bg-card border-none rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                  <img 
                      src={jonathanTetelman} 
                      alt="Jonathan Tetelman" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <p className="text-primary text-sm tracking-widest mb-2 uppercase">May 2026</p>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">Jonathan Tetelman</h3>
                    <p className="text-white/80 text-lg mb-6">International Opera Star</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black rounded-none py-6"
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

            {/* Elizabeth Blancke-Biggs */}
            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-bold text-center mb-4 text-white/90">Masterclass Series</h3>
              <Card className="bg-card border-none rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                  <img 
                      src={elizabethBlanckeBiggs} 
                      alt="Elizabeth Blancke-Biggs" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <p className="text-primary text-sm tracking-widest mb-2 uppercase">Guest Artist</p>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">Elizabeth Blancke-Biggs</h3>
                    <p className="text-white/80 text-lg mb-6">International Dramatic Soprano</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black rounded-none py-6"
                      onClick={() => {
                          toast({
                              title: "Coming Soon",
                              description: "Details for Elizabeth Blancke-Biggs's masterclass will be announced shortly.",
                          });
                      }}
                    >
                      DETAILS
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Aria Masterclass Series */}
            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-bold text-center mb-4 text-white/90">Aria Masterclass Series</h3>
              <Card className="bg-card border-none rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                  <img 
                      src={ariaSeries} 
                      alt="Aria Masterclass Series" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <p className="text-primary text-sm tracking-widest mb-2 uppercase">Upcoming Series</p>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Elizabeth Blancke-Biggs & Mo. Michael Recchiuti</h3>
                    <p className="text-white/80 text-sm mb-6">Series 1: Mozart, Bel Canto, Verdi<br/>Series 2: Puccini, Verismo, Wagner, Strauss</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black rounded-none py-6"
                      onClick={() => {
                          toast({
                              title: "Coming Soon",
                              description: "Details for the Aria Masterclass Series will be announced shortly.",
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
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-12 border-l-4 border-primary pl-4">Past Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border border-white/10 rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video bg-neutral-900 relative overflow-hidden">
                <img 
                    src={stAnthonyChurch} 
                    alt="St. Anthony of Padua Church" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <p className="text-primary text-xs tracking-widest mb-2 uppercase">Past Event</p>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Open Your Hands…</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Artists Fighting Hunger. A concert in support of The Joy J Initiative to End Hunger.
                </p>
                <Button 
                  variant="link" 
                  className="text-white hover:text-primary p-0 h-auto font-medium"
                  onClick={() => setLocation("/past-event-st-anthony")}
                >
                  VIEW HIGHLIGHTS &rarr;
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}