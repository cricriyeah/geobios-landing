"use client";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";
import styles from "./contacto.module.css";

export default function Contacto() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.status === 'success') {
                setStatus('success');
                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    servicio: "",
                    mensaje: "",
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error sending form:", error);
            setStatus('error');
        }
    };

    return (
        <>
            <PageHero
                title="Contáctanos"
                subtitle="Estamos listos para atender sus necesidades en consultoría ambiental"
            />

            <section className={`${styles.section} ${styles.bgWarm}`}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Form */}
                        <FadeIn direction="left" duration={0.8}>
                            <div className={styles.formCard}>
                                <SectionTitle
                                    label="Escríbanos"
                                    title="Envíenos un Mensaje"
                                    centered={false}
                                />
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div>
                                            <label className={styles.label}>
                                                Nombre completo
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.nombre}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, nombre: e.target.value })
                                                }
                                                className={styles.input}
                                                placeholder="Su nombre"
                                            />
                                        </div>
                                        <div>
                                            <label className={styles.label}>
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className={styles.input}
                                                placeholder="correo@ejemplo.com"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div>
                                            <label className={styles.label}>
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.telefono}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, telefono: e.target.value })
                                                }
                                                className={styles.input}
                                                placeholder="+52 612 000 0000"
                                            />
                                        </div>
                                        <div>
                                            <label className={styles.label}>
                                                Servicio de interés
                                            </label>
                                            <select
                                                value={formData.servicio}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, servicio: e.target.value })
                                                }
                                                className={styles.select}
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
                                        <label className={styles.label}>
                                            Mensaje
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.mensaje}
                                            onChange={(e) =>
                                                setFormData({ ...formData, mensaje: e.target.value })
                                            }
                                            className={styles.textarea}
                                            placeholder="Describa su consulta o proyecto..."
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className={`${styles.btnPrimary} cursor-pointer`}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                                    </button>

                                    {status === 'success' && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{ color: '#10b981', fontWeight: 600, textAlign: 'center', marginTop: '0.5rem' }}
                                        >
                                            ✓ Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                                        </motion.p>
                                    )}

                                    {status === 'error' && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{ color: '#ef4444', fontWeight: 600, textAlign: 'center', marginTop: '0.5rem' }}
                                        >
                                            ✕ Error al enviar el mensaje. Por favor intente de nuevo o contáctenos por teléfono.
                                        </motion.p>
                                    )}
                                </form>
                            </div>
                        </FadeIn>

                        {/* Contact Info */}
                        <div className={styles.infoStack}>
                            <FadeIn direction="right" delay={0.2}>
                                <SectionTitle
                                    label="Información de contacto"
                                    title="Hable con Nosotros"
                                    centered={false}
                                />
                            </FadeIn>

                            {/* Contact Cards */}
                            <motion.div 
                                className={styles.cardsStack}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1 }
                                    }
                                }}
                            >


                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        show: { opacity: 1, x: 0 }
                                    }}
                                    className={styles.infoCard}
                                >
                                    <div className={styles.cardContent}>
                                        <div className={styles.iconWrapper}>
                                            <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className={styles.cardTitle}>
                                                M. en C. Adriel Bareño Villa
                                            </h4>
                                            <p className={styles.cardRole}>
                                                Contacto de atención
                                            </p>
                                            <a
                                                href="tel:+526121653962"
                                                className={styles.contactLink}
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                612 16 539 62
                                            </a>
                                            <a
                                                href="mailto:adriel.bareno@geobios.mx"
                                                className={styles.contactLink}
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                adriel.bareno@geobios.mx
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Mapa embebido - Ahora a lo ancho y debajo */}
                    <FadeIn direction="up" delay={0.5}>
                        <div className={styles.mapSection}>
                            <div className={styles.mapPlaceholder} style={{ height: '350px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.7!2d-110.33153!3d24.13297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd5c2f8e7e2a1%3A0x0!2sCalle+Toronja%2C+Los+Cactus%2C+23076+La+Paz%2C+B.C.S.!5e0!3m2!1ses!2smx!4v1713200000000!5m2!1ses!2smx"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación GEOBIOS La Paz"
                                />
                            </div>
                            <div className={styles.mapContent} style={{ background: 'white', border: '1px solid var(--border-light)', borderTop: 0, borderRadius: '0 0 0.375rem 0.375rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                                    <div>
                                        <p className={styles.mapText} style={{ fontWeight: 600, color: 'var(--text-dark)' }}>📍 Oficina La Paz, BCS</p>
                                        <p className={styles.mapText}>C. Toronja, Los Cactus, 23076 La Paz, Baja California Sur</p>
                                        <a
                                            href="https://maps.google.com/?q=C.+Toronja,+Los+Cactus,+23076+La+Paz,+Baja+California+Sur"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.contactLink}
                                            style={{ marginTop: '0.5rem' }}
                                        >
                                            Ver en Google Maps →
                                        </a>
                                    </div>
                                    <div>
                                        <p className={styles.mapText} style={{ fontWeight: 600, color: 'var(--text-dark)' }}>🏙️ Representación Ciudad de México</p>
                                        <p className={styles.mapText}>Avenida Porfirio Díaz, Colonia Del Valle, C. P. 03100, CDMX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
