import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import posterImage from '@assets/Screenshot_2026-01-03_at_3.34.35_PM_1767472478626.png';
import video1 from '@assets/IMG_9787_1767472000921.mov';
import video2 from '@assets/IMG_0224_1767472000922.mov';

export default function PastEventStAnthony() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24 container mx-auto px-6">
        <Button 
            variant="ghost" 
            className="mb-8 hover:bg-transparent hover:text-primary p-0"
            onClick={() => setLocation("/programs")}
        >
            &larr; BACK TO PROGRAMS
        </Button>

        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-primary text-sm tracking-widest uppercase mb-2">Past Event</p>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">OPEN YOUR HANDS…</h1>
                <h2 className="text-2xl md:text-3xl font-heading text-white/90 mb-6 italic">Artists Fighting Hunger</h2>
                
                <div className="w-20 h-1 bg-primary mx-auto mb-8" />
                
                <div className="space-y-2 mb-8">
                    <p className="text-lg font-bold tracking-wide uppercase">Studio Lirico NYC</p>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Presents</p>
                    <p className="text-xl md:text-2xl font-heading font-bold text-primary">A Concert in Support of<br/>The Joy J Initiative to End Hunger</p>
                </div>

                <div className="space-y-4">
                    <p className="text-xl font-bold text-white uppercase tracking-wider">Saturday, November 15th · 7 PM</p>
                    <div className="text-muted-foreground">
                        <p className="uppercase tracking-wide">St. Anthony of Padua</p>
                        <p className="uppercase tracking-wide">Roman Catholic Church</p>
                        <p className="uppercase tracking-wide">154 Sullivan Street NYC</p>
                    </div>
                </div>
            </div>

            {/* Event Poster / Image Display */}
            <div className="mb-16 bg-neutral-900 p-2 md:p-4 rounded-sm shadow-2xl">
                <div className="w-full relative">
                    <img 
                        src={posterImage} 
                        alt="Open Your Hands Concert Poster" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Videos Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-white">Performance Highlight</h3>
                    <div className="bg-black aspect-video rounded-sm overflow-hidden shadow-lg border border-white/10 relative group">
                        <video 
                            controls 
                            className="w-full h-full object-contain"
                            src={video1}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-white">Teaser Reel</h3>
                    <div className="bg-black aspect-video rounded-sm overflow-hidden shadow-lg border border-white/10 relative group">
                        <video 
                            controls 
                            className="w-full h-full object-contain"
                            src={video2}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            <div className="prose prose-invert max-w-none text-center">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Our inaugural concert at the historic St. Anthony of Padua Church in Manhattan was a night to remember. 
                    Featuring performances by our talented artists in a venue known for its stunning architecture and acoustic brilliance.
                </p>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}