import styles from "./PageHero.module.css";

interface PageHeroProps {
    title: string;
    subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className={styles.hero}>
            {/* Background Pattern */}
            <div className={styles.bg} />

            {/* Decorative circles */}
            <div className={styles.circle1} />
            <div className={styles.circle2} />

            {/* Grid pattern overlay */}
            <div className={styles.gridOverlay} />

            {/* Content */}
            <div className={styles.content}>
                <div className={`${styles.goldLine} ${styles.animated} ${styles.fadeIn}`} />
                <h1 className={`${styles.title} ${styles.animated} ${styles.fadeInUp} ${styles.delay100}`}>
                    {title}
                </h1>
                {subtitle && (
                    <p className={`${styles.subtitle} ${styles.animated} ${styles.fadeInUp} ${styles.delay200}`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
