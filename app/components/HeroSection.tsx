"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
            >
                <source
                    src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772141761/13403190-uhd_3840_2160_60fps_1_1_mdgcey.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.contentWrapper}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={styles.title}
                        >
                            Especialistas en{" "}
                            <span className={styles.accent}>Medio Ambiente</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className={styles.description}
                        >
                            Más de 20 años de experiencia en estudios ambientales, gestión
                            de trámites, supervisión de proyectos y cumplimiento normativo
                            en materia ambiental. Lideramos su proyecto o nos integramos a
                            él. Experiencia local, soluciones a su medida.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className={styles.ctaWrapper}
                        >
                            <a href="/contacto" className={styles.btnAccent}>
                                Solicitar Consultoría
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className={styles.scrollIndicator}
            >
                <svg
                    className={styles.scrollIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </section>
    );
}
