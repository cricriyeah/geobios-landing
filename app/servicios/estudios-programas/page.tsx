import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";

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

            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <SectionTitle
                            label="Nuestro servicio"
                            title="Programas y Estudios Ambientales Específicos"
                            centered={false}
                        />
                        <p className="text-text-medium leading-relaxed">
                            Contamos con un amplio listado de estudios ambientales que
                            pueden ser solicitados por la autoridad o algún trámite específico.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {categories.map((category, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-md p-8 border border-border-light"
                            >
                                <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </div>
                                    {category.title}
                                </h3>
                                <div className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <div
                                            key={j}
                                            className="flex items-start gap-3 p-3 bg-bg-warm rounded-sm"
                                        >
                                            <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-text-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Academic link callout */}
                    <div className="mt-12 bg-primary rounded-md p-10 text-center">
                        <h3 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-medium uppercase mb-3">
                            En GEOBIOS mantenemos un vínculo con instituciones académicas y de investigación
                        </h3>
                        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                            Para enriquecer nuestros estudios con opiniones científicas.
                        </p>
                        <a href="/contacto" className="btn-primary">
                            Contactar ahora
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
