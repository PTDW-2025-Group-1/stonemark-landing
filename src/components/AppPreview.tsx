import appScreens from "@/assets/app-screens.png";

const AppPreview = () => {
  return (
    <section id="preview" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience the App
            <br />
            <span className="text-primary">In Action</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless interface designed for explorers, historians, and curious minds
          </p>
        </div>

        {/* App Screens Preview */}
        <div className="relative max-w-6xl mx-auto animate-scale-in">
          <img
            src={appScreens}
            alt="Stone Mark App Screenshots"
            className="w-full rounded-2xl shadow-elegant border border-border/50"
          />
          
          {/* Feature <>Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div className="text-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">2,300+</div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        Stonemason Marks Catalogued
                    </p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">120+</div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        Monuments & Heritage Sites Mapped
                    </p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">15+</div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        Research Institutions & Contributors
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
