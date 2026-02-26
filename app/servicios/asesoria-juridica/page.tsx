import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";

const items = [
    "Asesoría en cumplimiento de la legislación ambiental vigente",
    "Representación legal ante autoridades ambientales",
    "Defensa en procedimientos administrativos ambientales",
    "Asesoría en inspecciones y verificaciones de PROFEPA",
    "Gestión de recursos de revisión y juicios de nulidad",
    "Consultoría en normatividad ambiental federal, estatal y municipal",
    "Elaboración de contratos con cláusulas ambientales",
    "Asesoría en responsabilidad ambiental y daño ambiental",
    "Apoyo en procesos de certificación ambiental",
];

export default function AsesoriaJuridica() {
    return (
        <>
            <PageHero
                title="Asesoría Jurídica Ambiental"
                subtitle="Apoyo legal especializado en legislación ambiental"
            />

            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <SectionTitle
                                label="Nuestro servicio"
                                title="Asesoría Legal en Materia Ambiental"
                                centered={false}
                            />
                            <div className="space-y-5 text-text-medium leading-relaxed">
                                <p>
                                    Brindamos asesoramiento jurídico especializado en materia
                                    ambiental, ofreciendo a nuestros clientes el respaldo legal
                                    necesario para proteger sus intereses y garantizar el
                                    cumplimiento normativo en todos sus proyectos.
                                </p>
                                <p>
                                    Nuestro equipo jurídico cuenta con amplia experiencia en
                                    derecho ambiental, recursos naturales y desarrollo sustentable,
                                    lo que nos permite ofrecer soluciones legales integrales y
                                    efectivas.
                                </p>
                                <p>
                                    Acompañamos a nuestros clientes durante inspecciones,
                                    verificaciones y procedimientos administrativos ante las
                                    diversas autoridades ambientales, garantizando la defensa
                                    adecuada de sus derechos.
                                </p>
                            </div>
                            <a href="/contacto" className="btn-primary mt-8 inline-block">
                                Solicitar este servicio
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </div>
                                Servicios legales
                            </h3>
                            <div className="space-y-3">
                                {items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border-light hover:border-accent/30 transition-all"
                                    >
                                        <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-text-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-[family-name:var(--font-playfair)] text-white text-3xl font-bold mb-4">
                        ¿Necesita asesoría jurídica ambiental?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        Proteja sus intereses con el respaldo de nuestro equipo legal
                        especializado en derecho ambiental.
                    </p>
                    <a href="/contacto" className="btn-primary">
                        Contactar ahora
                    </a>
                </div>
            </section>
        </>
    );
}
