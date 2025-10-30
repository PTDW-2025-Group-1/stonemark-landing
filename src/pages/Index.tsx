import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import APRUPP from "@/components/APRUPP.tsx";
import Partnership from "@/components/Partnership";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Features />
                <AppPreview />
                <APRUPP />
                <Partnership />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
