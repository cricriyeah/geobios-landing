"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/images/logo-geobios.png"
                        alt="GEOBIOS Logo"
                        width={188}
                        height={128}
                        className="group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    <Link
                        href="/"
                        className="px-4 py-2 text-sm font-medium text-white/90 hover:text-accent transition-colors duration-300 tracking-wide uppercase"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/nosotros"
                        className="px-4 py-2 text-sm font-medium text-white/90 hover:text-accent transition-colors duration-300 tracking-wide uppercase"
                    >
                        Nosotros
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className="px-4 py-2 text-sm font-medium text-white/90 hover:text-accent transition-colors duration-300 tracking-wide uppercase flex items-center gap-1">
                            Nuestros Servicios
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                                    }`}
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
                            className={`absolute top-full left-0 mt-2 w-72 rounded-md overflow-hidden shadow-2xl transition-all duration-300 ${servicesOpen
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                                }`}
                        >
                            <div className="glass-white border border-border-light">
                                {services.map((service, i) => (
                                    <Link
                                        key={i}
                                        href={service.href}
                                        className="block px-5 py-3.5 text-sm text-text-dark hover:bg-primary-pale/30 hover:text-primary transition-colors duration-200 border-b border-border-light/50 last:border-0"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {service.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contacto"
                        className="ml-4 px-6 py-2.5 text-sm font-semibold bg-accent text-primary rounded-sm hover:bg-accent-light transition-all duration-300 tracking-wide uppercase hover:shadow-lg hover:shadow-accent/20"
                    >
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-white p-2"
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
                className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="glass mx-4 mt-3 rounded-md p-4 space-y-1">
                    <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-white/90 hover:text-accent text-sm font-medium uppercase tracking-wide rounded-sm hover:bg-white/5 transition-colors"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/nosotros"
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-white/90 hover:text-accent text-sm font-medium uppercase tracking-wide rounded-sm hover:bg-white/5 transition-colors"
                    >
                        Nosotros
                    </Link>

                    <div>
                        <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-accent text-sm font-medium uppercase tracking-wide rounded-sm hover:bg-white/5 transition-colors"
                        >
                            Nuestros Servicios
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            {services.map((service, i) => (
                                <Link
                                    key={i}
                                    href={service.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block pl-8 pr-4 py-2.5 text-white/70 hover:text-accent text-sm transition-colors"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/contacto"
                        onClick={() => setMobileOpen(false)}
                        className="block mx-4 mt-2 px-4 py-3 text-center bg-accent text-primary font-semibold text-sm uppercase tracking-wide rounded-sm hover:bg-accent-light transition-colors"
                    >
                        Contáctanos
                    </Link>
                </div>
            </div>
        </header>
    );
}
