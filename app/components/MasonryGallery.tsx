"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import styles from "./MasonryGallery.module.css";

interface GalleryPhoto {
    src: string;
    alt: string;
}

interface MasonryGalleryProps {
    title: string;
    description?: string;
    images: GalleryPhoto[];
}

export default function MasonryGallery({ title, description, images }: MasonryGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);

    if (!images || images.length === 0) return null;

    return (
        <section className={styles.gallerySection}>
            <SectionTitle
                label="Galería"
                title={title}
                description={description}
            />

            <div className={styles.gridContainer}>
                {images.map((photo, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.5, 
                            delay: (i % 3) * 0.1,
                            ease: "easeOut" 
                        }}
                        whileHover={{ y: -5 }}
                        className={styles.galleryItem}
                        onClick={() => setSelectedImage(photo)}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <svg className={styles.zoomIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightbox} 
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className={styles.lightboxContent} 
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={1200}
                                height={800}
                                className={styles.lightboxImage}
                            />
                            <div className={styles.caption}>
                                {selectedImage.alt}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
