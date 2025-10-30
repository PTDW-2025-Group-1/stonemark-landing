import appMockup from "@/assets/app-mockup.png";

const About = () => {
    return (
        <section
            id="about"
            className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-card/30"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 animate-slide-in-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                            Discover the Craft
                            <br />
                            <span className="text-primary">Behind Every Stone</span>
                        </h2>

                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            <strong>Stone Mark</strong> is a mobile application dedicated to the
                            documentation and exploration of <strong>stonemason marks</strong> -
                            the unique symbols engraved by ancient craftsmen on monuments across
                            history. The project combines cultural heritage, field data collection,
                            and digital technology to preserve the invisible traces of architectural
                            tradition.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-semibold">Capture & Submit:</span>{" "}
                                    Photograph and register stonemason marks directly in the app, enriching
                                    the shared database with new findings.
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-semibold">Search & Discover:</span>{" "}
                                    Explore monuments and guilds, search by symbol, shape, or location, and
                                    uncover the historical context of each mark.
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-semibold">Geolocation Mapping:</span>{" "}
                                    View monuments and recorded marks on an interactive map with real-time
                                    positioning and filtering by category.
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-semibold">Cultural Preservation:</span>{" "}
                                    Contribute to safeguarding heritage by documenting and sharing the craft
                                    traditions that shaped our built history.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* App Mockup */}
                    <div className="relative animate-slide-in-right">
                        <div className="relative z-10">
                            <img
                                src={appMockup}
                                alt="Stone Mark App Interface"
                                className="w-full max-w-7xl mx-auto drop-shadow-2xl"
                            />
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
