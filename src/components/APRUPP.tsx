import { Building2, Shield, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const APRUPP = () => {
    const values = [
        {
            icon: Shield,
            title: "Heritage Protection",
            description:
                "Committed to safeguarding built heritage as a living testimony of cultural and social identity.",
        },
        {
            icon: Building2,
            title: "Urban Rehabilitation",
            description:
                "Promoting the revitalization and responsible restoration of historic urban centers across Portugal.",
        },
        {
            icon: Users,
            title: "Civic Participation",
            description:
                "Encouraging citizens, technicians, and institutions to collaborate in urban rehabilitation initiatives.",
        },
        {
            icon: Sparkles,
            title: "Knowledge & Innovation",
            description:
                "Bridging traditional restoration practices with scientific research and modern technology.",
        },
    ];

    return (
        <section
            id="aprupp"
            className="py-24 px-6 bg-gradient-to-b from-card/30 via-background to-background relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Info Section */}
                    <div className="animate-fade-in-up">
                        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                            <span className="text-primary font-semibold">Institutional Partner</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="text-primary">APRUPP</span>
                            <br />
                            <span className="text-2xl md:text-3xl text-foreground">
                Portuguese Association for Urban Rehabilitation and Heritage Protection
              </span>
                        </h2>

                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Founded in <strong>2012</strong>, APRUPP is a <strong>non-profit association</strong> dedicated to
                            promoting urban rehabilitation as a key driver for safeguarding cultural identity,
                            reducing social asymmetries, and encouraging citizen participation.
                            Composed solely of individual members, APRUPP collaborates with professionals,
                            researchers, and communities who share the goal of preserving Portugal’s architectural
                            and cultural legacy.
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-muted-foreground">Founded in 2012</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-muted-foreground">Headquartered in Porto</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-muted-foreground">National and international reach</span>
                            </div>
                        </div>
                    </div>

                    {/* Logo Placeholder */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 rounded-3xl p-12 flex items-center justify-center backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
                                {<img src="/src/assets/aprupp.png" alt="APRUPP Logo" className="w-full h-full object-contain" />}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                        >
                            <div className="space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold leading-tight">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Call to Action Banner */}
                <div
                    className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-10 text-center animate-fade-in-up"
                    style={{ animationDelay: "0.8s" }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Together for Urban and Cultural Heritage
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
                        This collaboration embodies a shared commitment to preserve built heritage,
                        promote good rehabilitation practices, and strengthen the connection between
                        communities and their historical identity.
                    </p>
                    <a
                        href="https://aprupp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-glow font-semibold"
                    >
                        <span>Learn More About APRUPP</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default APRUPP;
