import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";

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

            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <SectionTitle
                                label="Nuestro servicio"
                                title="Asesoría Jurídica Ambiental"
                                centered={false}
                            />
                            <div className="space-y-5 text-text-medium leading-relaxed">
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
                            <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                    </svg>
                                </div>
                                Servicios legales
                            </h3>
                            <div className="space-y-3">
                                {items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 p-4 bg-white rounded-sm border border-border-light hover:border-accent/30 transition-all"
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
                    <h2 className="font-[family-name:var(--font-playfair)] text-white text-3xl font-medium uppercase mb-4">
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
