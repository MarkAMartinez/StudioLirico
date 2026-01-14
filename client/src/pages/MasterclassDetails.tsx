import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import morrisImage from '@assets/PHOTO-2026-01-06-10-10-37.jpg';
import hallImage from '@assets/image_1767752997156.png';

export default function MasterclassDetails() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24 container mx-auto px-6">
        <Button 
            variant="ghost" 
            className="mb-8 hover:bg-transparent hover:text-primary p-0"
            onClick={() => setLocation("/")}
        >
            &larr; BACK TO HOME
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-start overflow-hidden">
            <div className="space-y-6">
                <img 
                    src={morrisImage} 
                    alt="Morris Robinson" 
                    className="w-full shadow-2xl rounded-sm"
                />
                
                <div className="relative">
                    <img 
                        src={hallImage} 
                        alt="Bohemian National Hall Ballroom" 
                        className="w-full shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <p className="text-xs text-muted-foreground mt-2 italic">The Ballroom at Bohemian National Hall</p>
                </div>
            </div>
            
            <div>
                <div className="mb-6">
                    <p className="text-primary text-sm tracking-widest uppercase mb-2">Upcoming Event</p>
                    <h2 className="text-2xl font-light text-white/80 mb-2 italic">Singers Teaching Singing</h2>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Masterclass with Morris Robinson</h1>
                    <p className="text-xl text-muted-foreground font-light">International Opera Star, Bass</p>
                </div>

                <div className="prose prose-invert max-w-none mb-8 space-y-6">
                    <p className="text-lg leading-relaxed">
                        Mo. Michael Recchiuti and Elizabeth Blancke-Biggs are thrilled to welcome our first Guest Artist Teacher, 
                        internationally acclaimed American Bass <strong>Morris Robinson</strong>.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                        The Masterclass will take place in conjunction with the BBLA, and DAHA in the 
                        Ballroom of the Bohemian National Hall.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Take advantage of this rare opportunity to sing for, and work with an actual working international opera singer!
                    </p>

                    <div className="bg-secondary/30 p-8 border border-white/10 my-8">
                        <h3 className="text-xl font-bold mb-4 text-primary">Application Details</h3>
                        <p className="mb-4">
                            Applications to participate must include a bio, headshot, links to two vocal selections, and a fee of $25 payable by our Zelle.
                        </p>
                        <p className="mb-4">
                            <strong>Six participants</strong> will be chosen, six alternates, and all other applicants may come as auditors. 
                            Admission for singers and the public is $25.
                        </p>
                        <p className="font-bold text-white">
                            Deadline is January 20.
                        </p>
                        
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-lg mb-2">Send applications to:</p>
                            <a href="mailto:masterclass@studioliriconyc.org" className="text-primary hover:underline text-xl font-medium">
                                masterclass@studioliriconyc.org
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 border border-white/10 mb-8">
                    <h3 className="text-xl font-bold mb-4">Event Information</h3>
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:justify-between border-b border-white/10 pb-3">
                            <span className="text-muted-foreground mb-1 md:mb-0">Date & Time</span>
                            <span className="font-medium text-right">Sunday, January 25<br/>4:00 PM - 6:00 PM</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between border-b border-white/10 pb-3">
                            <span className="text-muted-foreground mb-1 md:mb-0">Location</span>
                            <span className="font-medium text-right">Bohemian National Hall<br/>321 E 73rd St, New York</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between pb-2">
                            <span className="text-muted-foreground mb-1 md:mb-0">Admission</span>
                            <span className="font-medium text-right">$25 (Singers & Public)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
