"use client";

import FadeIn from "../../components/FadeIn";
import PageHero from "../../components/PageHero";
import ImageCarousel from "../../components/ImageCarousel";
import styles from "../ServiceDetail.module.css";

const categories = [
    {
        title: "Impacto Ambiental",
        items: [
            "Manifestación de impacto ambiental federales en todas sus modalidades",
            "Modificaciones a proyectos autorizados",
            "Cambios de titularidad",
            "Manifestación de impacto ambiental estatal",
            "Concesión para extracción de materiales en el gobierno del estado",
        ],
    },
    {
        title: "Forestal",
        items: [
            "Estudio Técnico Justificativo",
            "Recolección de germoplasma forestal",
            "Autorización como centro de almacenamiento y transformación de especies forestales",
        ],
    },
    {
        title: "Residuos",
        items: [
            "Registros de planes de manejo de residuos peligrosos",
            "Registro como generador de residuos peligrosos",
            "Registro de planes de manejo de residuos de manejo especial",
        ],
    },
    {
        title: "Vida Silvestre",
        items: [
            "Registro UMA/PIMVS",
            "Autorización de aprovechamiento forestal",
            "Autorización de aprovechamiento no extractivo",
        ],
    },
    {
        title: "Zona Federal",
        items: [
            "Solicitud de concesión",
            "Prórrogas y modificación a concesión",
            "Cesión de derechos",
        ],
    },
    {
        title: "CONAGUA",
        items: [
            "Solicitud de dictamen de no afectaciones de escurrimientos pluviales",
            "Solicitud de concesión de pozo exploratorio playero",
            "Solicitud de concesión para ocupar la zona federal",
            "Solicitud de validación de los estudios técnicos para la delimitación de la zona federal",
        ],
    },
];

export default function GestionAmbiental() {
    return (
        <>
            <PageHero
                title="Gestión Ambiental"
                subtitle="Experiencia y compromiso en el cumplimiento de la legislación ambiental"
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
                    <div className={styles.carouselSection}>
                        <ImageCarousel
                            title="Desarrollo de Levantamientos en Campo"
                            description="Realizamos levantamientos técnicos con precisión para el desarrollo de estudios ambientales de alta calidad."
                            images={[
                                { src: "/images/fotos-geo/Levantamientos/IMG_20220112_100949264_HDR.jpg", alt: "Levantamientos en sitio" },
                                { src: "/images/fotos-geo/Levantamientos/IMG_20231016_095559.jpg", alt: "Equipo GEOBIOS en levantamientos ambientales" },
                                { src: "/images/fotos-geo/Levantamientos/PXL_20220602_143130730.jpg", alt: "Mediciones de campo" },
                                { src: "/images/fotos-geo/Levantamientos/20250930_113303.jpg", alt: "Supervisión técnica de campo" }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <FadeIn direction="up">
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCircle1} />
                    <div className={styles.ctaCircle2} />
                    <div className={styles.ctaSectionContent}>
                        <h2 className={styles.ctaTitle}>
                            ¿Necesita apoyo en gestión ambiental?
                        </h2>
                        <p className={styles.ctaText}>
                            Contáctenos y con gusto le asesoraremos para encontrar la solución
                            más adecuada para su proyecto.
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
