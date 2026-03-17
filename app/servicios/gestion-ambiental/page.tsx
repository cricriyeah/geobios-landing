import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";

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

            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <SectionTitle
                            label="Nuestro servicio"
                            title="Gestión Ambiental"
                            centered={false}
                        />
                        <div className="space-y-5 text-text-medium leading-relaxed">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                    <div className="mt-12 text-center">
                        <a href="/contacto" className="btn-primary">
                            Solicitar este servicio
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-[family-name:var(--font-playfair)] text-white text-3xl font-medium uppercase mb-4">
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
