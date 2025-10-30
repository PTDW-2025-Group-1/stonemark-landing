import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Historical monuments"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
          Discover the Story
          <br />
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Behind Every Stone
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Where Every Stone Tells a Story
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("cta")}
            className="bg-primary hover:bg-primary/90 text-foreground shadow-glow text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
          >
            Download App
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="border-border bg-card/50 backdrop-blur-sm hover:bg-card text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
