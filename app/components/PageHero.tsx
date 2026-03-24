"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PageHero.module.css";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <section className={styles.hero}>
            {/* Background */}
            {backgroundImage ? (
                <>
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        className={styles.bgImage}
                        priority
                        sizes="100vw"
                    />
                    <div className={styles.bgOverlay} />
                </>
            ) : (
                <div className={styles.bg} />
            )}

            {/* Decorative circles */}
            <div className={styles.circle1} />
            <div className={styles.circle2} />

            {/* Grid pattern overlay */}
            <div className={styles.gridOverlay} />

            {/* Content */}
            <div className={styles.content}>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.title}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.subtitle}
                    >
                        {subtitle}
                    </motion.p>
                )}
                <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ transformOrigin: "center" }}
                    className={styles.goldLine} 
                />
            </div>
        </section>
    );
}
