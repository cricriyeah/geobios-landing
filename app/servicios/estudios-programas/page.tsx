"use client";

import FadeIn from "../../components/FadeIn";
import PageHero from "../../components/PageHero";
import ImageCarousel from "../../components/ImageCarousel";
import styles from "../ServiceDetail.module.css";

const categories = [
    {
        title: "Estudios Específicos con Dron",
        items: [
            "Supervisión de proyectos y obras",
            "Ortografía y modelado 3D",
            "Fotografía aérea y filmación de video",
            "Cartografía",
            "Estimación de masa forestal",
        ],
    },
    {
        title: "Programas de Rescate de Flora y Fauna",
        items: [
            "Monitoreo de flora y fauna",
            "Análisis de los resultados del monitoreo",
            "Estrategias de rescate",
            "Seguimiento del rescate",
        ],
    },
    {
        title: "Planes de Manejo de Residuos",
        items: [
            "Planes de manejo de residuos peligrosos",
            "Planes de manejo de residuos de manejo especial",
            "Planes de manejo de residuos sólidos urbanos",
            "Estudios de caracterización y generación de residuos",
        ],
    },
    {
        title: "Estudios de Generación de Residuos",
        items: [
            "Planes de manejo de residuos peligrosos",
            "Planes de manejo de residuos de manejo especial",
            "Planes de manejo de residuos sólidos urbanos",
            "Estudios de caracterización y generación de residuos",
        ],
    },
];

const floraPhotos = [
    { src: "/images/fotos-geo/Rescate y Reubicacion de Flora/TimePhoto_20230703_061014.jpg", alt: "Rescate de flora en campo" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Flora/TimePhoto_20230703_105308.jpg", alt: "Identificación de especies vegetales" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Flora/IMG_20240122_134052.jpg", alt: "Reubicación de flora silvestre" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Flora/IMG_20240309_103640.jpg", alt: "Trabajo de campo rescate flora" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Flora/IMG_20230724_121532.jpg", alt: "Documentación de especies rescatadas" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Flora/TimePhoto_20230704_150841.jpg", alt: "Proceso de rescate de vegetación" },
];

const faunaPhotos = [
    { src: "/images/fotos-geo/Rescate y Reubicacion de Fauna/IMG_20210406_083134600.jpg", alt: "Rescate de fauna silvestre" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Fauna/Original_TimePhoto_20210407_100644.jpg", alt: "Manejo de fauna en campo" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Fauna/IMG_20240311_105517.jpg", alt: "Reubicación de especies animales" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Fauna/TimePhoto_20230710_122357.jpg", alt: "Documentación de fauna rescatada" },
    { src: "/images/fotos-geo/Rescate y Reubicacion de Fauna/IMG-20240615-WA0004.jpg", alt: "Liberación de fauna silvestre" },
];

const levantamientosPhotos = [
    { src: "/images/fotos-geo/Levantamientos/IMG_20220112_100949264_HDR.jpg", alt: "Levantamiento topográfico en campo" },
    { src: "/images/fotos-geo/Levantamientos/IMG_20220112_120256557.jpg", alt: "Mediciones en sitio de proyecto" },
    { src: "/images/fotos-geo/Levantamientos/IMG_20220210_112817534_HDR.jpg", alt: "Trabajo de levantamiento ambiental" },
    { src: "/images/fotos-geo/Levantamientos/PXL_20220602_143130730.jpg", alt: "Equipo realizando levantamientos" },
    { src: "/images/fotos-geo/Levantamientos/IMG_20231016_095559.jpg", alt: "Levantamiento de datos en campo" },
];

export default function EstudiosProgramas() {
    return (
        <>
            <PageHero
                title="Programas y Estudios Específicos"
                subtitle="Soluciones técnicas y especializadas para el cumplimiento legal"
            />

            <section className={`${styles.section} ${styles.bgWarm}`}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {categories.map((category, i) => (
                            <FadeIn key={i} direction="up" delay={i * 0.1}>
                                <div className={styles.card}>
                                    <h3 className={styles.categoryTitle}>
                                        <span className={styles.categoryNumber}>{String(i + 1).padStart(2, '0')}</span>
                                        {category.title}
                                    </h3>
                                    <div className={styles.list}>
                                        {category.items.map((item, j) => (
                                            <div
                                                key={j}
                                                className={styles.listItem}
                                            >
                                                <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className={styles.listText}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn direction="up">
                        <div className={styles.carouselSection}>
                            <ImageCarousel
                                title="Rescate y Reubicación de Flora"
                                description="Documentación fotográfica de nuestros programas de rescate y reubicación de especies vegetales."
                                images={floraPhotos}
                            />
                        </div>
                    </FadeIn>

                    <FadeIn direction="up">
                        <div className={styles.carouselSection}>
                            <ImageCarousel
                                title="Rescate y Reubicación de Fauna"
                                description="Evidencia de nuestro trabajo de rescate, manejo y reubicación de fauna silvestre."
                                images={faunaPhotos}
                            />
                        </div>
                    </FadeIn>

                    <FadeIn direction="up">
                        <div className={styles.carouselSection}>
                            <ImageCarousel
                                title="Levantamientos de Campo"
                                description="Registro de nuestros levantamientos topográficos y ambientales en diferentes proyectos."
                                images={levantamientosPhotos}
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA */}
            <FadeIn direction="up">
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCircle1} />
                    <div className={styles.ctaCircle2} />
                    <div className={styles.ctaSectionContent}>
                        <h2 className={styles.ctaTitle}>
                            Vínculo con instituciones académicas
                        </h2>
                        <p className={styles.ctaText}>
                            En GEOBIOS mantenemos un estrecho vínculo con instituciones
                            académicas y de investigación para enriquecer nuestros estudios con
                            opiniones científicas de vanguardia.
                        </p>
                        <a href="/contacto" className="btn-accent">
                            Contactar ahora
                        </a>
                    </div>
                </section>
            </FadeIn>
        </>
    );
}
