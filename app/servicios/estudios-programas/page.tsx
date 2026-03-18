import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
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

export default function EstudiosProgramas() {
    return (
        <>
            <PageHero
                title="Programas y Estudios Específicos"
                subtitle="Estudios ambientales solicitados por la autoridad o para trámites específicos"
            />

            <section className={`${styles.section} ${styles.bgWarm}`}>
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <SectionTitle
                            label="Nuestro servicio"
                            title="Programas y Estudios Ambientales Específicos"
                            centered={false}
                        />
                        <p className={styles.cardDescription}>
                            Contamos con un amplio listado de estudios ambientales que
                            pueden ser solicitados por la autoridad o algún trámite específico.
                        </p>
                    </div>

                    <div className={styles.grid}>
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

                    </div>
            </section>

            {/* CTA */}
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
        </>
    );
}
