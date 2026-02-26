import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";

const items = [
    "Manifestaciones de Impacto Ambiental (MIA)",
    "Informes Preventivos",
    "Planes de manejo de residuos sólidos urbanos y de manejo especial",
    "Programas de manejo de residuos peligrosos",
    "Licencias Ambientales Únicas (LAU)",
    "Cédulas de Operación Anual (COA)",
    "Trámites ante SEMARNAT, PROFEPA, CONAGUA y otras dependencias",
    "Gestión de permisos y autorizaciones ambientales",
    "Planes de contingencia ambiental",
    "Programas de prevención de accidentes",
];

export default function GestionAmbiental() {
    return (
        <>
            <PageHero
                title="Gestión Ambiental"
                subtitle="Administración integral de procesos ambientales"
            />

            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <SectionTitle
                                label="Nuestro servicio"
                                title="Gestión Ambiental Integral"
                                centered={false}
                            />
                            <div className="space-y-5 text-text-medium leading-relaxed">
                                <p>
                                    En GEOBIOS ofrecemos un servicio completo de gestión ambiental
                                    que abarca desde la obtención de permisos y autorizaciones
                                    hasta el seguimiento y cumplimiento de las condicionantes
                                    establecidas por las autoridades ambientales.
                                </p>
                                <p>
                                    Nuestro equipo multidisciplinario cuenta con la experiencia y
                                    el conocimiento necesario para guiar a nuestros clientes en
                                    cada etapa del proceso, garantizando el cumplimiento de la
                                    legislación ambiental vigente y minimizando los riesgos
                                    asociados.
                                </p>
                                <p>
                                    Trabajamos de manera estrecha con las autoridades ambientales
                                    federales, estatales y municipales para asegurar que cada
                                    trámite se realice de manera eficiente y oportuna.
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
                                Servicios incluidos
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
                        ¿Necesita apoyo en gestión ambiental?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        Contáctenos y con gusto le asesoraremos para encontrar la solución
                        más adecuada para su proyecto.
                    </p>
                    <a href="/contacto" className="btn-primary">
                        Contactar ahora
                    </a>
                </div>
            </section>
        </>
    );
}
