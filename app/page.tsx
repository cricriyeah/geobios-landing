import HeroSection from "./components/HeroSection";
import SectionTitle from "./components/SectionTitle";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Gestión Ambiental",
    description:
      "Administración integral de procesos ambientales para garantizar el cumplimiento normativo y la sustentabilidad de sus proyectos.",
    href: "/servicios/gestion-ambiental",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Supervisión Ambiental",
    description:
      "Monitoreo y vigilancia continua para asegurar que sus operaciones cumplan con los estándares ambientales vigentes.",
    href: "/servicios/supervision-ambiental",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Estudios y Programas Ambientales",
    description:
      "Elaboración de estudios científicos, geográficos y programas ambientales con rigor técnico y metodológico.",
    href: "/servicios/estudios-programas",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    title: "Asesoría Jurídica Ambiental",
    description:
      "Apoyo legal especializado en legislación ambiental para proteger sus intereses y garantizar el cumplimiento normativo.",
    href: "/servicios/asesoria-juridica",
  },
];

const stats = [
  { value: "+20", label: "Años de experiencia" },
  { value: "+500", label: "Proyectos realizados" },
  { value: "+100", label: "Clientes satisfechos" },
  { value: "4", label: "Áreas de especialidad" },
];

export default function Home() {
  return (
    <>
      {/* Hero with Video */}
      <HeroSection />

      {/* About Preview */}
      <section className="py-24 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Sobre nosotros"
                title="¿Quiénes Somos?"
                centered={false}
              />
              <p className="text-text-medium leading-relaxed mb-6">
                Consultoría Ambiental GEOBIOS es una empresa fundada en el año
                2000 por un grupo multidisciplinario de profesionistas
                preocupados por el desarrollo de los Estados, la conservación
                ambiental y el aprovechamiento respetuoso de los recursos
                naturales, mediante el cumplimiento de la legislación ambiental
                vigente.
              </p>
              <p className="text-text-medium leading-relaxed mb-8">
                Contamos con un equipo de profesionales altamente capacitados en
                diversas disciplinas como geología, biología, ingeniería
                ambiental y derecho ambiental.
              </p>
              <a href="/nosotros" className="btn-primary">
                Conocer nuestra historia
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 text-center border border-border-light hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                >
                  <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-text-medium text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            label="Lo que hacemos"
            title="Nuestros Servicios"
            description="Ofrecemos soluciones integrales en materia ambiental, adaptadas a las necesidades específicas de cada proyecto."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-lighter/20 blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <SectionTitle
            label="¿Necesita asesoría?"
            title="Contáctenos para una consulta personalizada"
            description="Nuestro equipo de expertos está listo para ayudarle a encontrar la mejor solución para sus necesidades ambientales."
            light
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contacto" className="btn-primary text-center">
              Solicitar Consultoría
            </a>
            <a href="tel:+526121402861" className="btn-outline text-center">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
