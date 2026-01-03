import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import morrisImage from '@assets/image_1767038728031.png';

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <img 
                    src={morrisImage} 
                    alt="Morris Robinson" 
                    className="w-full shadow-2xl rounded-sm"
                />
            </div>
            
            <div>
                <div className="mb-6">
                    <p className="text-primary text-sm tracking-widest uppercase mb-2">Upcoming Event</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Masterclass with Morris Robinson</h1>
                    <p className="text-xl text-muted-foreground font-light">International Opera Star, Bass</p>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                    <p className="text-lg leading-relaxed mb-4">
                        Join us for an exclusive masterclass with world-renowned bass Morris Robinson. 
                        Mr. Robinson is considered one the most interesting and sought-after basses performing today.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        He regularly appears at the Metropolitan Opera, San Francisco Opera, Lyric Opera of Chicago, 
                        Dallas Opera, Houston Grand Opera, Opera Philadelphia, and many other leading opera houses internationally.
                    </p>
                    <p className="text-lg leading-relaxed">
                        In this masterclass, selected participants will have the unique opportunity to work 
                        directly with Mr. Robinson on vocal technique, interpretation, and stage presence.
                    </p>
                </div>

                <div className="bg-secondary/30 p-8 border border-white/10 mb-8">
                    <h3 className="text-xl font-bold mb-4">Event Details</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-muted-foreground">Date</span>
                            <span className="font-medium">To Be Announced</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-muted-foreground">Time</span>
                            <span className="font-medium">To Be Announced</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-muted-foreground">Location</span>
                            <span className="font-medium">To Be Announced</span>
                        </div>
                    </div>
                </div>

                <Button size="lg" disabled className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg tracking-widest opacity-70">
                    Details will be upcoming
                </Button>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
