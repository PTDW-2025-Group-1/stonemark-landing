import { Linkedin, Github, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Team = () => {
    const teamMembers = [
        {
            name: "Alexandra Dias",
            role: "Project Lead & UX Designer",
            description: "Heritage preservation specialist",
        },
        {
            name: "Diogo Oliveira",
            role: "Backend Architect",
            description: "Spring Boot & API development expert",
        },
        {
            name: "Gustavo Gião",
            role: "Android Developer",
            description: "Jetpack Compose specialist",
        },
        {
            name: "Nagib Gamará",
            role: "Database Engineer",
            description: "PostgreSQL optimization & data modeling",
        },
        {
            name: "Ratmir Mukazhanov",
            role: "Frontend Developer",
            description: "UI/UX implementation & responsive design",
        },
        {
            name: "Pedro Sousa",
            role: "DevOps & Quality Assurance",
            description: "CI/CD pipeline & testing automation",
        },
    ];

    return (
        <section id="team" className="py-24 px-6 bg-card">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Meet the <span className="text-primary">Team</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Passionate developers and designers dedicated to preserving cultural heritage through technology
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-3xl font-bold text-primary-foreground">
                                    {member.name.split(" ").map(n => n[0]).join("")}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium mb-2">{member.role}</p>
                                    <p className="text-sm text-muted-foreground">{member.description}</p>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
