import FadeIn from "./FadeIn";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
    label: string;
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
            <FadeIn direction="up">
                <span className={`${styles.label} ${light ? styles.labelLight : ""}`}>
                    {label}
                </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
                <div className={`${styles.goldLine} ${centered ? styles.goldLineCentered : ""}`} />
                <h2 className={`${styles.title} ${light ? styles.titleLight : ""}`}>
                    {title}
                </h2>
            </FadeIn>

            {description && (
                <FadeIn direction="up" delay={0.2}>
                    <p
                        className={`${styles.description} ${centered ? styles.descriptionCentered : ""} ${
                            light ? styles.descriptionLight : ""
                        }`}
                    >
                        {description}
                    </p>
                </FadeIn>
            )}
        </div>
    );
}
