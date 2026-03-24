"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.cardWrapper}
    >
      <Link href={href} className={styles.card}>
        <motion.div 
          className={styles.iconWrapper}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={styles.iconContainer}>{icon}</div>
        </motion.div>
        
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.footer}>
          <span className={styles.linkText}>Ver detalles</span>
          <motion.svg 
            className={styles.arrow} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            whileHover={{ x: 5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </div>
      </Link>
    </motion.div>
  );
}
