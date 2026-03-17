interface PageHeroProps {
    title: string;
    subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-primary" />

            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary-lighter/20 blur-2xl" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <div className="gold-line mx-auto mb-6 animate-fade-in" />
                <h1 className="font-[family-name:var(--font-playfair)] text-white text-4xl md:text-5xl lg:text-6xl font-medium uppercase mb-4 animate-fade-in-up opacity-0 delay-100">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/70 text-lg max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200">
                        {subtitle}
                    </p>
                )}
            </div>


        </section>
    );
}
