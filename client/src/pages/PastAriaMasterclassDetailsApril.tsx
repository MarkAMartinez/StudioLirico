import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import ariaSeriesImage from "@assets/M_R_Piano.jpg";
import zelleQR from "@assets/image_1767036056896.png";

export default function PastAriaMasterclassDetailsApril() {
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <img
              src={ariaSeriesImage}
              alt="Elizabeth Blancke-Biggs and Mo. Michael Recchiuti"
              className="w-full shadow-2xl rounded-sm"
            />
          </div>

          <div>
            <div className="mb-6">
              <p className="text-primary text-sm tracking-widest uppercase mb-2">Past Event &mdash; April 2026</p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Aria Masterclass Series</h1>
              <h2 className="text-2xl font-light text-white/80 mb-4 italic">
                Verismo, Wagner, and Strauss
              </h2>
            </div>

            <div className="prose prose-invert max-w-none mb-8 space-y-6">
              <p className="text-lg leading-relaxed">
                Studio Lirico NYC produced a Masterclass Series for six participants with internationally renowned
                soprano <strong> Elizabeth Blancke-Biggs</strong>{" "}
                (
                <a
                  href="http://www.elizabethblancke-biggs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.elizabethblancke-biggs.com
                </a>
                ) and <strong>Mo. Michael Recchiuti</strong>{" "}
                (
                <a
                  href="http://www.michaelrecchiuti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.michaelrecchiuti.com
                </a>
                ).
              </p>

              <p className="text-lg leading-relaxed">
                The course consisted of four intensive two hour coaching classes on every aspect of preparing and
                recording audition arias, held at the AMDA Studios in NYC and leading toward a professionally recorded
                high definition recital performance session at the state of the art NV Factory Recording Studio in
                Englewood, NJ.
              </p>

              <p className="text-lg leading-relaxed">
                Within two days of the recording singers received high definition video recordings of their
                performances usable for all applications and competitions.
              </p>

              <div className="bg-secondary/30 p-8 border border-white/10 my-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Schedule & Locations</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-1">Classes</h4>
                    <p className="text-white/80">April 14, 16, 22, 23</p>
                    <p className="text-white/80">7:00 PM - 9:00 PM</p>
                    <p className="text-white/60 text-sm">AMDA Studios, 244 W 54th St., NY</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-1">Recital Recording</h4>
                    <p className="text-white/80">Monday, April 27</p>
                    <p className="text-white/80">8:00 PM - 10:00 PM</p>
                    <p className="text-white/60 text-sm">
                      NV Factory Recording Studio, 400 Sylvan Ave., Englewood Cliffs, NJ
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold">Tuition Fee</span>
                    <span className="text-xl font-bold text-primary">$600</span>
                  </div>
                  <p className="text-sm text-white/60 italic">All inclusive. Class limited to six participants.</p>
                </div>
              </div>

              <div className="bg-card p-8 border border-white/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Application Details</h3>

                <p className="mb-4">
                  Applicants were asked to send bio, headshot and two video or audio links to:
                  <br />
                  <a href="mailto:masterclass@studioliriconyc.org" className="text-primary hover:underline font-medium">
                    masterclass@studioliriconyc.org
                  </a>
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                  <div className="flex-1">
                    <p className="mb-2 font-bold">Application Fee: $25</p>
                    <p className="text-sm text-white/70 mb-2">Payable via Zelle or email:</p>
                    <a
                      href="mailto:payments.studioliriconyc@gmail.com"
                      className="text-primary text-sm hover:underline"
                    >
                      payments.studioliriconyc@gmail.com
                    </a>
                  </div>
                  <div className="w-32 h-32 bg-white p-2 shrink-0">
                    <img src={zelleQR} alt="Zelle QR Code" className="w-full h-full object-contain" />
                  </div>
                </div>

                <p className="font-bold text-white border-t border-white/10 pt-4 mt-4">
                  Application Deadline: April 10, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
