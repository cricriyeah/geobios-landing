import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
            >
                <source
                    src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772141761/13403190-uhd_3840_2160_60fps_1_1_mdgcey.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.contentWrapper}>
                <div className={styles.container}>
                    <div className={styles.content}>

                        <h1 className={`${styles.title} ${styles.animated} ${styles.fadeInUp} ${styles.delay200}`}>
                            Especialistas en{" "}
                            <span className={styles.accent}>Consultoría Ambiental</span>
                        </h1>

                        {/* Description */}
                        <p className={`${styles.description} ${styles.animated} ${styles.fadeInUp} ${styles.delay300}`}>
                            Estudios y trabajos científicos especializados en materia
                            ambiental. Más de 20 años protegiendo el medio ambiente con
                            soluciones integrales.
                        </p>

                        {/* CTAs */}
                        <div className={`${styles.ctaWrapper} ${styles.animated} ${styles.fadeInUp} ${styles.delay400}`}>
                            <a href="/contacto" className={styles.btnAccent}>
                                Solicitar Consultoría
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <svg
                    className={styles.scrollIcon}
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
