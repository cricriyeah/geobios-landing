import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
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
        ],
    },
];

export default function GestionAmbiental() {
    return (
        <>
            <PageHero
                title="Gestión Ambiental"
                subtitle="Larga trayectoria en la gestión de trámites y asuntos ambientales"
            />

            <section className={`${styles.section} ${styles.bgWarm}`}>
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <SectionTitle
                            label="Nuestro servicio"
                            title="Gestión Ambiental"
                            centered={false}
                        />
                        <div className={styles.textBlock}>
                            <p>
                                GEOBIOS tiene una larga trayectoria en la gestión de trámites
                                y asuntos ambientales, tanto federales, estatales y municipales.
                            </p>
                            <p>
                                Contamos con un amplio listado de trámites y asuntos en los
                                cuales tenemos experiencia; entre los cuales destacan:
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.grid} ${styles.grid3}`}>
                        {categories.map((category, i) => (
                            <div
                                key={i}
                                className={styles.card}
                            >
                                <h3 className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </div>
                                    <span className={styles.cardTitle}>{category.title}</span>
                                </h3>
                                <div className={styles.list}>
                                    {category.items.map((item, j) => (
                                        <div
                                            key={j}
                                            className={styles.listItem}
                                        >
                                            <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className={styles.listText}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.footerCta}>
                        <a href="/contacto" className="btn-primary">
                            Solicitar este servicio
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
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
        </>
    );
}
