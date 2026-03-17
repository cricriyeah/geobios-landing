import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";

const services = [
    {
        title: "Supervisión Integral de Proyectos",
        description:
            "Te acompañamos en cada etapa de tu proyecto, desde la planeación hasta su desarrollo y vida útil.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: "Supervisión de Términos y Condicionantes",
        description:
            "¿Obtuviste una autorización ambiental sobre Impacto Ambiental, Cambio de Uso de Suelo o un Plan de Manejo de Residuos y no sabes qué sigue? Nosotros te asesoramos sobre las siguientes etapas y te acompañamos para tener el 100% del cumplimiento condicionado.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
    {
        title: "Programa de Auditoría Ambiental",
        description:
            "Los programas de Auditoría Ambiental se enfocan en conseguir las certificaciones de Industria Limpia, Calidad Ambiental o Calidad Turística.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
    },
];

export default function SupervisionAmbiental() {
    return (
        <>
            <PageHero
                title="Supervisión Ambiental"
                subtitle="Monitoreo y vigilancia continua para el cumplimiento ambiental"
            />

            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionTitle
                        label="Nuestro servicio"
                        title="Supervisión Ambiental"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-md p-8 border border-border-light text-center hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
                            >
                                <div className="w-16 h-16 rounded-sm bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-text-dark font-bold text-lg mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-text-medium text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Banner */}
                    <div className="mt-16 bg-primary rounded-md p-10 text-center">
                        <h3 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-medium uppercase mb-3">
                            ¡Pregunta por nuestros planes y beneficios!
                        </h3>
                        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                            Garantice el cumplimiento ambiental de sus proyectos con nuestro
                            equipo de supervisores certificados.
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
