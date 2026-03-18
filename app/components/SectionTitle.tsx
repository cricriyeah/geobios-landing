import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
    label?: string;
    title: string;
    description?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionTitle({
    label,
    title,
    description,
    centered = true,
    light = false,
}: SectionTitleProps) {
    return (
        <div className={`${styles.wrapper} ${centered ? styles.centered : ""}`}>
            {label && (
                <p
                    className={`${styles.label} ${light ? styles.labelLight : ""}`}
                >
                    {label}
                </p>
            )}
            <div className={`${styles.goldLine} ${centered ? styles.goldLineCentered : ""}`} />
            <h2
                className={`${styles.title} ${light ? styles.titleLight : ""}`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`${styles.description} ${centered ? styles.descriptionCentered : ""} ${light ? styles.descriptionLight : ""}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
