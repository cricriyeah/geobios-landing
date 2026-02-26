import Link from "next/link";
import Image from "next/image";

const services = [
    { name: "Gestión Ambiental", href: "/servicios/gestion-ambiental" },
    { name: "Supervisión Ambiental", href: "/servicios/supervision-ambiental" },
    { name: "Estudios y Programas", href: "/servicios/estudios-programas" },
    { name: "Asesoría Jurídica", href: "/servicios/asesoria-juridica" },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Image
                                src="/geobios-logo.png"
                                alt="GEOBIOS Logo"
                                width={44}
                                height={44}
                            />
                            <span className="text-xl font-bold tracking-wide">GEOBIOS</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Consultoría Ambiental con más de 20 años de experiencia en
                            gestión, supervisión y estudios ambientales. Comprometidos con el
                            desarrollo sustentable.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-6">
                            Nuestros Servicios
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, i) => (
                                <li key={i}>
                                    <Link
                                        href={service.href}
                                        className="text-white/60 hover:text-accent text-sm transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-accent/50" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-6">
                            Navegación
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/nosotros"
                                    className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
                                >
                                    Contáctanos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-6">
                            Contacto
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-white/90 text-sm font-medium">
                                    Lic. Joanna Sermeño Gochez
                                </p>
                                <p className="text-white/50 text-xs">
                                    Subdirector General / Jurídico
                                </p>
                                <a
                                    href="tel:+526121402861"
                                    className="text-accent/80 hover:text-accent text-sm transition-colors"
                                >
                                    +52 612 140 2861
                                </a>
                            </div>
                            <div>
                                <p className="text-white/90 text-sm font-medium">
                                    Geol. Lorenzo Javier López Vázquez
                                </p>
                                <p className="text-white/50 text-xs">Director General</p>
                                <a
                                    href="tel:+526121040049"
                                    className="text-accent/80 hover:text-accent text-sm transition-colors"
                                >
                                    +52 612 104 0049
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Consultoría Ambiental GEOBIOS. Todos
                        los derechos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-white/40 text-xs">
                            Comprometidos con el medio ambiente
                        </span>
                        <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-primary-lighter"
                            fill="currentColor"
                        >
                            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}
