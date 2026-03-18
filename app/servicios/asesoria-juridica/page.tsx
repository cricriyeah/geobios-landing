import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import styles from "../ServiceDetail.module.css";

const items = [
    "Atención a procedimientos con PROFEPA",
    "Evaluación jurídico ambiental de proyectos (diagnóstico ambiental), para llevar a cabo la mejor toma de decisiones",
];

export default function AsesoriaJuridica() {
    return (
        <>
            <PageHero
                title="Asesoría Jurídica Ambiental"
                subtitle="Apoyo legal especializado en legislación ambiental"
            />

            <section className={`${styles.section} ${styles.bgWarm}`}>
                <div className={styles.container}>
                    <div className={`${styles.grid} items-start`}>
                        <div>
                            <SectionTitle
                                label="Nuestro servicio"
                                title="Asesoría Jurídica Ambiental"
                                centered={false}
                            />
                            <div className={styles.textBlock}>
                                <p>
                                    Nuestro equipo jurídico te brinda la asesoría requerida en
                                    materia ambiental para el cumplimiento de la Legislación
                                    Ambiental Vigente en casos como:
                                </p>
                            </div>
                            <a href="/contacto" className="btn-primary mt-8 inline-block">
                                Solicitar este servicio
                            </a>
                        </div>

                        <div>
                            <h3 className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                    </svg>
                                </div>
                                <span className={styles.cardTitle}>Servicios legales</span>
                            </h3>
                            <div className={styles.list}>
                                {items.map((item, i) => (
                                    <div
                                        key={i}
                                        className={styles.listItemWhite}
                                    >
                                        <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className={styles.listText}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCircle1} />
                <div className={styles.ctaCircle2} />
                <div className={styles.ctaSectionContent}>
                    <h2 className={styles.ctaTitle}>
                        ¿Necesita asesoría jurídica ambiental?
                    </h2>
                    <p className={styles.ctaText}>
                        Proteja sus intereses con el respaldo de nuestro equipo legal
                        especializado en derecho ambiental.
                    </p>
                    <a href="/contacto" className="btn-accent">
                        Contactar ahora
                    </a>
                </div>
            </section>
        </>
    );
}
