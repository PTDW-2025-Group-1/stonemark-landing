import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for joining! We'll notify you when the app launches.");
      setEmail("");
    }
  };

  return (
    <section id="cta" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-primary/10 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Start Your
              <br />
              <span className="text-primary">Historical Journey?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Download Stone Mark today and explore the world's monuments like never before
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground shadow-glow text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Join our early access list for exclusive updates
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-card border-border h-12 text-base"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-foreground h-12 px-6 sm:px-8 w-full sm:w-auto"
              >
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
