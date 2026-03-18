import { ReactNode } from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    href: string;
}

export default function ServiceCard({
    icon,
    title,
    description,
    href,
}: ServiceCardProps) {
    return (
        <a href={href} className={styles.link}>
            <div className={styles.card}>
                {/* Icon */}
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                </div>

                {/* Title */}
                <h3 className={styles.title}>
                    {title}
                </h3>

                {/* Description */}
                <p className={styles.description}>
                    {description}
                </p>

                {/* Link indicator */}
                <span className={styles.moreLink}>
                    Conocer más
                    <svg
                        className={styles.chevron}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>
            </div>
        </a>
    );
}
