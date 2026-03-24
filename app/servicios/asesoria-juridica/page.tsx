"use client";

import FadeIn from "../../components/FadeIn";
import PageHero from "../../components/PageHero";
import styles from "../ServiceDetail.module.css";

export default function AsesoriaJuridica() {
    return (
        <>
            <PageHero
                title="Asesoría Jurídica Ambiental"
                subtitle="Seguridad legal y cumplimiento normativo para sus proyectos"
            />

            <section className={`${styles.section} ${styles.bgWarm}`}>
                <div className={styles.container}>
                    <FadeIn direction="up">
                        <div className={`${styles.card} ${styles.singleCard}`}>
                            <h3 className={styles.categoryTitle}>
                                <span className={styles.categoryNumber}>01</span>
                                Asesoría Legal Especializada
                            </h3>
                            <div className={styles.textBlock}>
                                <p>
                                    En GEOBIOS, entendemos que el cumplimiento ambiental no es solo
                                    técnico, sino también legal. Contamos con expertos en derecho
                                    ambiental para brindarle la seguridad jurídica que sus
                                    proyectos requieren.
                                </p>
                                <p>
                                    Nuestros servicios incluyen:
                                </p>
                                <div className={styles.list}>
                                    {[
                                        "Atención a inspecciones y vigilancias por parte de autoridades (PROFEPA, SEMARNAT, CONAGUA, etc.)",
                                        "Elaboración de recursos de revisión y conmutación de multas",
                                        "Seguimiento jurídico de trámites y autorizaciones",
                                        "Asesoría en legislación ambiental vigente federal y estatal",
                                        "Auditorías de cumplimiento legal"
                                    ].map((item, i) => (
                                        <div key={i} className={styles.listItem}>
                                            <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className={styles.listText}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                            ¿Enfrenta algún proceso legal ambiental?
                        </h2>
                        <p className={styles.ctaText}>
                            Nuestro equipo jurídico está listo para defender sus intereses y
                            asegurar el cumplimiento normativo de su empresa.
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
