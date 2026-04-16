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
                                    M. en C. Adriel Bareño Villa
                                </p>
                                <p className={styles.contactTitle}>
                                    Contacto de atención
                                </p>
                                <a
                                    href="tel:+526121040049"
                                    className={styles.contactPhone}
                                >
                                    +52 612 104 0049
                                </a>
                                <a
                                    href="mailto:adriel.bareno@geobios.mx"
                                    className={styles.contactPhone}
                                >
                                    adriel.bareno@geobios.mx
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
                        <a
                            href="https://www.facebook.com/profile.php?id=100063748264528&locale=es_LA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            aria-label="Facebook GEOBIOS"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                            <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/geobios_ambiental/?hl=es-la"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            aria-label="Instagram GEOBIOS"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                            <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Instagram
                        </a>
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
