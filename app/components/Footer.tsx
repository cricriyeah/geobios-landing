import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const services = [
    { name: "Gestión Ambiental", href: "/servicios/gestion-ambiental" },
    { name: "Supervisión Ambiental", href: "/servicios/supervision-ambiental" },
    { name: "Programas y Estudios", href: "/servicios/estudios-programas" },
    { name: "Asesoría Jurídica", href: "/servicios/asesoria-juridica" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Main Footer */}
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/images/logoblanco1.png"
                                alt="GEOBIOS Logo"
                                width={140}
                                height={96}
                            />
                        </div>
                        <p className={styles.description}>
                            Consultoría Ambiental con más de 20 años de experiencia en
                            gestión, supervisión y estudios ambientales. Comprometidos con el
                            desarrollo sustentable.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className={styles.columnTitle}>
                            Nuestros Servicios
                        </h4>
                        <ul className={styles.list}>
                            {services.map((service, i) => (
                                <li key={i}>
                                    <Link
                                        href={service.href}
                                        className={styles.link}
                                    >
                                        <span className={styles.dot} />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className={styles.columnTitle}>
                            Navegación
                        </h4>
                        <ul className={styles.list}>
                            <li>
                                <Link
                                    href="/"
                                    className={styles.link}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/nosotros"
                                    className={styles.link}
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className={styles.link}
                                >
                                    Contáctanos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className={styles.columnTitle}>
                            Contacto
                        </h4>
                        <div className={styles.contactWrapper}>
                            <div>
                                <p className={styles.contactName}>
                                    Lic. Joanna Sermeño Gochez
                                </p>
                                <p className={styles.contactTitle}>
                                    Subdirector General / Jurídico
                                </p>
                                <a
                                    href="tel:+526121402861"
                                    className={styles.contactPhone}
                                >
                                    +52 612 140 2861
                                </a>
                            </div>
                            <div>
                                <p className={styles.contactName}>
                                    Geol. Lorenzo Javier López Vázquez
                                </p>
                                <p className={styles.contactTitle}>Director General</p>
                                <a
                                    href="tel:+526121040049"
                                    className={styles.contactPhone}
                                >
                                    +52 612 104 0049
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Consultoría Ambiental GEOBIOS. Todos
                        los derechos reservados.
                    </p>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badgeText}>
                            Comprometidos con el medio ambiente
                        </span>
                        <svg
                            viewBox="0 0 24 24"
                            className={styles.icon}
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
