"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const services = [
    { name: "Gestión Ambiental", href: "/servicios/gestion-ambiental" },
    { name: "Supervisión Ambiental", href: "/servicios/supervision-ambiental" },
    {
        name: "Programas y Estudios Específicos",
        href: "/servicios/estudios-programas",
    },
    { name: "Asesoría Jurídica Ambiental", href: "/servicios/asesoria-juridica" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`}
        >
            <nav className={styles.nav}>
                {/* Logo */}
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/images/logoblanco1grande.png"
                        alt="GEOBIOS Logo"
                        width={124}
                        height={84}
                        className={styles.logo}
                    />
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    <Link
                        href="/"
                        className={styles.navLink}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/nosotros"
                        className={styles.navLink}
                    >
                        Nosotros
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className={styles.dropdownContainer}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className={styles.dropdownButton}>
                            Nuestros Servicios
                            <svg
                                className={`${styles.chevron} ${servicesOpen ? styles.chevronRotated : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div
                            className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownVisible : styles.dropdownHidden}`}
                        >
                            <div className={styles.dropdownContent}>
                                {services.map((service, i) => (
                                    <Link
                                        key={i}
                                        href={service.href}
                                        className={styles.dropdownItem}
                                    >
                                        <span className={styles.itemWrapper}>
                                            <span className={styles.dot} />
                                            {service.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contacto"
                        className={styles.contactBtn}
                    >
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={styles.mobileBtn}
                    aria-label="Abrir menú"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed}`}
            >
                <div className={styles.mobileMenuContent}>
                    <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className={styles.mobileNavLink}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/nosotros"
                        onClick={() => setMobileOpen(false)}
                        className={styles.mobileNavLink}
                    >
                        Nosotros
                    </Link>

                    <div>
                        <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className={styles.mobileDropdownBtn}
                        >
                            Nuestros Servicios
                            <svg
                                className={`${styles.chevron} ${mobileServicesOpen ? styles.chevronRotated : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`${styles.mobileSubMenu} ${mobileServicesOpen ? styles.mobileSubMenuOpen : styles.mobileSubMenuClosed}`}
                        >
                            {services.map((service, i) => (
                                <Link
                                    key={i}
                                    href={service.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={styles.mobileSubLink}
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/contacto"
                        onClick={() => setMobileOpen(false)}
                        className={styles.mobileContactBtn}
                    >
                        Contáctanos
                    </Link>
                </div>
            </div>
        </header>
    );
}
