"use client";

import FadeIn from "../../components/FadeIn";
import PageHero from "../../components/PageHero";
import ImageCarousel from "../../components/ImageCarousel";
import styles from "../ServiceDetail.module.css";

const categories = [
    {
        title: "Impacto Ambiental",
        items: [
            "Manifestación de impacto ambiental federal en todas sus modalidades",
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
            "Registro de Unidades de Manejo para la Conservación de Vida Silvestre (UMA/PIMVS)",
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
                            title="GESTIÓN AMBIENTAL"
                            description="Organizamos las actividades, políticas y recursos de manera colaborativa para alcanzar el cumplimiento normativo en materia ambiental"
                            images={[
                                { src: "/FOTOS GEOBIOS/gestion/IMG_0320.jpeg", alt: "Equipo GEOBIOS en instalaciones" },
                                { src: "/FOTOS GEOBIOS/gestion/IMG_0335.jpeg", alt: "Gestión ambiental en sitio" },
                                { src: "/FOTOS GEOBIOS/gestion/IMG_2701.jpeg", alt: "Documentación ambiental" },
                                { src: "/FOTOS GEOBIOS/gestion/IMG_3087.jpeg", alt: "Supervisión y gestión" },
                                { src: "/FOTOS GEOBIOS/gestion/WhatsApp Image 2023-10-24 at 14.44.02 (1).jpeg", alt: "Trabajo de campo en gestión ambiental" }
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
