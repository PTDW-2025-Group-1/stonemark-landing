import { Globe, Users, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Partnership = () => {
    const highlights = [
        {
            icon: Award,
            title: "UNESCO Partnership",
            description: "Official collaboration with UNESCO for heritage preservation initiatives",
        },
        {
            icon: Globe,
            title: "Global Expansion",
            description: "Preparing for international deployment across multiple countries",
        },
        {
            icon: Users,
            title: "Cultural Impact",
            description: "Empowering millions to connect with their cultural heritage",
        },
        {
            icon: TrendingUp,
            title: "Sustainable Growth",
            description: "Built for scale with proven technology and architecture",
        },
    ];

    return (
        <section id="partnership" className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                        <span className="text-primary font-semibold">Global Initiative</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Partnering with <span className="text-primary">UNESCO</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                        Stone Mark is being developed in collaboration with UNESCO to preserve and promote world heritage sites.
                        With proven technology and a scalable architecture, we're preparing for international expansion to help
                        countries worldwide protect and share their cultural treasures.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {highlights.map((item, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center animate-fade-in-up">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Preserving Heritage, Building the Future
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                        Our mission is to make cultural heritage accessible to everyone, everywhere.
                        Through innovative technology and strategic partnerships, we're creating a global
                        platform for heritage exploration and education.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-3 bg-card rounded-lg border border-border">
                            <div className="text-3xl font-bold text-primary">15+</div>
                            <div className="text-sm text-muted-foreground">Countries Planned</div>
                        </div>
                        <div className="px-6 py-3 bg-card rounded-lg border border-border">
                            <div className="text-3xl font-bold text-primary">1000+</div>
                            <div className="text-sm text-muted-foreground">Heritage Sites</div>
                        </div>
                        <div className="px-6 py-3 bg-card rounded-lg border border-border">
                            <div className="text-3xl font-bold text-primary">10M+</div>
                            <div className="text-sm text-muted-foreground">Expected Users</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partnership;
