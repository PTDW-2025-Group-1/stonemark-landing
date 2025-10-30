import {MapPin, Leaf, Camera, Search, Filter, Bookmark} from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
    const features = [
        {
            icon: Camera,
            title: "Capture & Submit Marks",
            description:
                "Photograph and submit authentic stonemason marks directly from the app, contributing to a growing digital archive of craftsmanship heritage.",
        },
        {
            icon: Search,
            title: "Search Monuments & Guilds",
            description:
                "Discover monuments, guilds, and stonemason symbols through a fast and intuitive search experience.",
        },
        {
            icon: Filter,
            title: "Advanced Filtering",
            description:
                "Filter marks by monument, guild, geometric shape, or other visual traits to explore detailed cultural patterns and associations.",
        },
        {
            icon: Bookmark,
            title: "Bookmarks & Collections",
            description:
                "Save your favourite monuments, guilds, or marks to personalized collections — perfect for research, teaching, or exploration.",
        },
        {
            icon: MapPin,
            title: "Geolocation on Map",
            description:
                "Explore nearby stonemason marks and monuments in real-time using an interactive map with precise geolocation features.",
        },
        {
            icon: Leaf,
            title: "Cultural Preservation",
            description:
                "Support the documentation and preservation of stonemason heritage through community participation and open historical data.",
        },
    ];

    return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for
            <br />
            <span className="text-primary">Every Explorer</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed to make your journey through history seamless, engaging, and unforgettable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
