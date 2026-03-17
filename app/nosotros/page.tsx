import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const team = [
    {
        name: "Geol. Lorenzo Javier López Vázquez",
        role: "Director General",
        description:
            "Geólogo con amplia experiencia en estudios geológicos, geográficos y ambientales. Lidera la dirección estratégica y técnica de GEOBIOS.",
    },
    {
        name: "Lic. Joanna Sermeño Gochez",
        role: "Subdirector General / Jurídico",
        description:
            "Especialista en derecho ambiental con experiencia en gestión de trámites y cumplimiento normativo ante autoridades ambientales.",
    },
];

const values = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
        title: "Compromiso",
        description: "Dedicación absoluta a la conservación ambiental y al desarrollo sustentable de cada proyecto.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
        title: "Profesionalismo",
        description: "Equipo multidisciplinario con formación especializada y actualización constante en materia ambiental.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
        ),
        title: "Integridad",
        description: "Transparencia y ética en cada proceso, asegurando resultados confiables y verificables.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        title: "Innovación",
        description: "Aplicación de las más avanzadas metodologías y tecnologías en estudios y consultoría ambiental.",
    },
];

export default function Nosotros() {
    return (
        <>
            <PageHero
                title="Nosotros"
                subtitle="Conoce la historia y el equipo detrás de GEOBIOS"
            />

            {/* About */}
            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <SectionTitle
                                label="Nuestra historia"
                                title="¿Quiénes Somos?"
                                centered={false}
                            />
                            <div className="space-y-5 text-text-medium leading-relaxed">
                                <p>
                                    Consultoría Ambiental GEOBIOS es una empresa fundada en el año
                                    2000 por un grupo multidisciplinario de profesionistas
                                    preocupados por el desarrollo de los Estados, la conservación
                                    ambiental y el aprovechamiento respetuoso de los recursos
                                    naturales, mediante el cumplimiento de la legislación ambiental
                                    vigente.
                                </p>
                                <p>
                                    GEOBIOS está representado por personal profesional altamente
                                    capacitado y consciente de la importancia que reviste la
                                    conservación de los recursos naturales y el desarrollo de
                                    proyectos compatibles y congruentes con los Planes y Programas
                                    de Desarrollo en cada Estado, manteniendo un equilibrio con su
                                    entorno.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Mission */}
                            <div className="bg-white rounded-md p-8 border border-border-light">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-dark">Misión</h3>
                                </div>
                                <p className="text-text-medium text-sm leading-relaxed">
                                    Proporcionar el óptimo de la utilidad del proyecto y la
                                    utilización del capital natural, conforme a la legislación
                                    vigente dentro de un enfoque multicriterio.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-white rounded-md p-8 border border-border-light">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-dark">Visión</h3>
                                </div>
                                <p className="text-text-medium text-sm leading-relaxed">
                                    Ser una empresa que utiliza los conocimientos científicos y
                                    tecnología de vanguardia para aportar elementos para la toma
                                    de decisiones en la gestión de la sustentabilidad. Para
                                    alcanzar esta visión, asumimos compromisos con calidad y
                                    espíritu de servicio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionTitle
                        label="Lo que nos define"
                        title="Nuestros Valores"
                        description="Los principios que guían cada una de nuestras acciones y decisiones."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="text-center p-8 rounded-md bg-bg-warm border border-border-light hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
                            >
                                <div className="w-16 h-16 rounded-sm bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors text-primary group-hover:text-accent">
                                    {value.icon}
                                </div>
                                <h3 className="text-text-dark font-bold text-lg mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-text-medium text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionTitle
                        label="Nuestro equipo"
                        title="Equipo Directivo"
                        description="Profesionales con amplia trayectoria y compromiso con la excelencia ambiental."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-md p-8 border border-border-light hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <h3 className="text-text-dark font-bold text-lg mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-accent font-semibold text-sm mb-4">
                                    {member.role}
                                </p>
                                <p className="text-text-medium text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
