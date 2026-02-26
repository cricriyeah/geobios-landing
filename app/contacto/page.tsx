"use client";

import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Gracias por su mensaje. Nos pondremos en contacto pronto.");
    };

    return (
        <>
            <PageHero
                title="Contáctanos"
                subtitle="Estamos listos para atender sus necesidades en consultoría ambiental"
            />

            <section className="py-24 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <SectionTitle
                                label="Escríbanos"
                                title="Envíenos un Mensaje"
                                centered={false}
                            />
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-dark mb-2">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.nombre}
                                            onChange={(e) =>
                                                setFormData({ ...formData, nombre: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-white border border-border-light rounded-lg text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                            placeholder="Su nombre"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-dark mb-2">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-white border border-border-light rounded-lg text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                            placeholder="correo@ejemplo.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-dark mb-2">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.telefono}
                                            onChange={(e) =>
                                                setFormData({ ...formData, telefono: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-white border border-border-light rounded-lg text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                            placeholder="+52 612 000 0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-dark mb-2">
                                            Servicio de interés
                                        </label>
                                        <select
                                            value={formData.servicio}
                                            onChange={(e) =>
                                                setFormData({ ...formData, servicio: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-white border border-border-light rounded-lg text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none"
                                        >
                                            <option value="">Seleccionar servicio</option>
                                            <option value="gestion">Gestión Ambiental</option>
                                            <option value="supervision">Supervisión Ambiental</option>
                                            <option value="estudios">
                                                Estudios y Programas Ambientales
                                            </option>
                                            <option value="asesoria">
                                                Asesoría Jurídica Ambiental
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-dark mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.mensaje}
                                        onChange={(e) =>
                                            setFormData({ ...formData, mensaje: e.target.value })
                                        }
                                        className="w-full px-4 py-3 bg-white border border-border-light rounded-lg text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                                        placeholder="Describa su consulta o proyecto..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary cursor-pointer">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <SectionTitle
                                label="Información de contacto"
                                title="Hable con Nosotros"
                                centered={false}
                            />

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-8 border border-border-light">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-dark mb-1">
                                                Lic. Joanna Sermeño Gochez
                                            </h4>
                                            <p className="text-accent text-sm font-medium mb-2">
                                                Subdirector General / Jurídico
                                            </p>
                                            <a
                                                href="tel:+526121402861"
                                                className="text-text-medium hover:text-primary text-sm transition-colors flex items-center gap-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                +52 612 140 2861
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 border border-border-light">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-dark mb-1">
                                                Geol. Lorenzo Javier López Vázquez
                                            </h4>
                                            <p className="text-accent text-sm font-medium mb-2">
                                                Director General
                                            </p>
                                            <a
                                                href="tel:+526121040049"
                                                className="text-text-medium hover:text-primary text-sm transition-colors flex items-center gap-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                +52 612 104 0049
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="bg-white rounded-2xl border border-border-light overflow-hidden h-64 flex items-center justify-center">
                                <div className="text-center text-text-light">
                                    <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <p className="text-sm">Baja California Sur, México</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
