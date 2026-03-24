"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import styles from "./ImageCarousel.module.css";

interface ImageItem {
    src: string;
    alt: string;
}

interface ImageCarouselProps {
    title: string;
    description?: string;
    images: ImageItem[];
    visibleItemsCount?: 1 | 2 | 3; // Make it configurable
}

export default function ImageCarousel({ 
    title, 
    description, 
    images, 
    visibleItemsCount = 3 
}: ImageCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleItems, setVisibleItems] = useState(visibleItemsCount);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleItems(1);
            } else if (window.innerWidth < 1024) {
                // If the user wants 1, keep 1. If they want 3, maybe show 2 on tablet.
                setVisibleItems(Math.min(visibleItemsCount, 2) as 1 | 2 | 3);
            } else {
                setVisibleItems(visibleItemsCount);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [visibleItemsCount]);

    // Ensure currentSlide is within bounds after resize
    useEffect(() => {
        const maxSlide = Math.max(0, images.length - visibleItems);
        if (currentSlide > maxSlide) {
            setCurrentSlide(maxSlide);
        }
    }, [visibleItems, images.length, currentSlide]);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => {
            const maxSlide = images.length - visibleItems;
            if (maxSlide <= 0) return 0;
            return prev >= maxSlide ? 0 : prev + 1;
        });
    }, [images.length, visibleItems]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => {
            const maxSlide = images.length - visibleItems;
            if (maxSlide <= 0) return 0;
            return prev <= 0 ? maxSlide : prev - 1;
        });
    }, [images.length, visibleItems]);

    if (!images || images.length === 0) return null;

    const showNavigation = images.length > visibleItems;

    return (
        <FadeIn direction="up" duration={0.8}>
            <div className={styles.carouselContainer} data-visible={visibleItemsCount}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    {description && <p className={styles.description}>{description}</p>}
                </div>

                <div className={styles.carouselWrapper}>
                    <div 
                        className={styles.imageTrack}
                        style={{ 
                            transform: `translateX(-${currentSlide * (100 / visibleItems)}%)`,
                        }}
                    >
                        {images.map((img, index) => (
                            <div 
                                key={index} 
                                className={styles.imageItem}
                                style={{ flex: `0 0 ${100 / visibleItems}%` }}
                            >
                                <div className={`${styles.imageInner} ${visibleItemsCount === 1 ? styles.ratio169 : styles.ratio32}`}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes={visibleItems === 1 ? "100vw" : visibleItems === 2 ? "50vw" : "33vw"}
                                        className={styles.image}
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {showNavigation && (
                        <>
                            <button 
                                className={`${styles.navButton} ${styles.prevButton}`} 
                                onClick={prevSlide}
                                aria-label="Anterior"
                            >
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                className={`${styles.navButton} ${styles.nextButton}`} 
                                onClick={nextSlide}
                                aria-label="Siguiente"
                            >
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    <div className={styles.indicators}>
                        {images.map((_, index) => {
                            const maxSlide = images.length - visibleItems;
                            if (index > maxSlide && maxSlide >= 0) return null;
                            
                            return (
                                <button
                                    key={index}
                                    className={`${styles.indicator} ${currentSlide === index ? styles.active : ""}`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Ir a imagen ${index + 1}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}
