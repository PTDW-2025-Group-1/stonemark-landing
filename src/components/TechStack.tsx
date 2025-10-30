import { Code2, Database, Smartphone, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const TechStack = () => {
  const technologies = [
    {
      icon: Smartphone,
      name: "Android (Kotlin)",
      description: "Modern UI built with Jetpack Compose",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Server,
      name: "Spring Boot (Java)",
      description: "Robust REST API backend",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Database,
      name: "PostgreSQL",
      description: "Reliable and scalable database",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Code2,
      name: "RESTful API",
      description: "Clean architecture and best practices",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="tech" className="py-16 sm:py-20 md:py-24 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built with
            <br />
            <span className="text-primary">Modern Technology</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered for performance, scalability, and an exceptional user experience
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {tech.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Architecture Highlight */}
        <div className="max-w-3xl mx-auto text-center bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 animate-scale-in">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Clean Architecture
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Stone Mark follows industry best practices with a layered architecture, 
            separation of concerns, and comprehensive API documentation. Built to scale 
            from prototype to millions of users while maintaining code quality and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
