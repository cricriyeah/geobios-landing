export default function HeroSection() {
    return (
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >

                <source
                    src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772141761/13403190-uhd_3840_2160_60fps_1_1_mdgcey.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 video-overlay" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        {/* Accent Line */}
                        <div className="gold-line mb-8 animate-fade-in" />

                        {/* Subtitle */}
                        <p className="text-accent font-medium text-sm uppercase tracking-[0.25em] mb-4 animate-fade-in-up opacity-0 delay-100">
                            Consultoría Ambiental
                        </p>

                        {/* Main Title */}
                        <h1 className="font-[family-name:var(--font-playfair)] text-white text-5xl md:text-6xl lg:text-7xl font-medium uppercase leading-tight mb-6 animate-fade-in-up opacity-0 delay-200">
                            Especialistas en{" "}
                            <span className="text-accent">Consultoría Ambiental</span>
                        </h1>

                        {/* Description */}
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up opacity-0 delay-300">
                            Estudios y trabajos científicos especializados en materia
                            ambiental. Más de 20 años protegiendo el medio ambiente con
                            soluciones integrales.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-400">
                            <a href="/contacto" className="btn-primary text-center">
                                Solicitar Consultoría
                            </a>
                            <a href="/nosotros" className="btn-outline text-center">
                                Conocer más
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
