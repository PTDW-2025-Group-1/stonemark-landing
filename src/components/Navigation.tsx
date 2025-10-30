import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { label: "Home", id: "hero" },
        { label: "About", id: "about" },
        { label: "Features", id: "features" },
        { label: "Preview", id: "preview" },
        { label: "Partnership", id: "partnership" },
        { label: "Technology", id: "tech" },
        { label: "Team", id: "team" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                            <span className="text-foreground font-bold text-lg sm:text-xl">S</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-foreground">Stone Mark</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection("cta")}
                            className="bg-primary hover:bg-primary/90 text-foreground shadow-glow"
                        >
                            Download App
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-left"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection("cta")}
                                className="bg-primary hover:bg-primary/90 text-foreground w-full"
                            >
                                Download App
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
