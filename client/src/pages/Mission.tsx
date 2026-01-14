import heroImage from '@assets/stock_images/classical_music_shee_2ec9bdf6.jpg';
import maestroPortrait from '@assets/michael_1766181089128.jpg';
import maestroConducting from '@assets/P1000457_1766181097631.jpeg';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Mission() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Classical Sheet Music" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Our Mission
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="mt-8 text-2xl md:text-3xl font-heading italic text-white/80 max-w-3xl mx-auto">
              "Everyone is looking for stars; we are training artists."
            </p>
            <p className="mt-4 text-lg font-heading text-primary">— Michael Recchiuti</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Text */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="text-left text-muted-foreground text-lg leading-relaxed space-y-8">
            <p className="first-letter:text-5xl first-letter:font-heading first-letter:text-primary first-letter:float-left first-letter:mr-3">
              Studio Lirico NYC is a not-for-profit corporation dedicated to advancing the education, training, and professional development of emerging opera singers in and around New York. We develop comprehensive training programs including private lessons, master classes, seminars, and workshops led by distinguished professionals.
            </p>
            <p>
              As public performance is a critical component of a singer's training, we produce and present recitals, concerts, staged operas of varying scales, and other vocal music events. We also organize competitions and audition opportunities that lead to performances.
            </p>
            <p>
               Our goal is to create a supportive community and network for young singers, providing mentorship, career guidance, and the resources necessary for sustainable careers in opera.
            </p>
          </div>
        </div>
      </section>

      {/* Maestro Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30 z-0" />
              <img 
                src={maestroPortrait} 
                alt="Maestro Michael Recchiuti" 
                className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Artistic Direction</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                 Under the guidance of Maestro Michael Recchiuti, Studio Lirico NYC upholds the highest standards of the operatic tradition. With a career spanning decades conducting on the world's great stages, Maestro Recchiuti brings unparalleled insight and passion to the next generation of vocal artists.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                 For more information about Maestro Recchiuti's career and engagements, please visit <a href="https://www.michaelrecchiuti.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.michaelrecchiuti.com</a>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                 "Our focus is not just on the voice, but on the complete artist—the musician, the actor, the scholar. This is where true artistry begins."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conducting / Vision Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Image Parallax Effect */}
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={maestroConducting} alt="Maestro Conducting" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-12">Advisory Board</h2>
              <div className="flex flex-col items-center gap-6">
                {[
                  "Elizabeth Blancke-Biggs",
                  "Morris Robinson",
                  "Jonathan Tetelman",
                  "Susan Lucaks",
                  "Amelia Watkins"
                ].map((name) => (
                  <h3 key={name} className="text-2xl md:text-3xl font-heading text-white/90 font-light tracking-wide">
                    {name}
                  </h3>
                ))}
              </div>
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-muted-foreground text-sm uppercase tracking-widest">
                  Legal representation by Falcon Rappaport & Berkman LLP
                </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
