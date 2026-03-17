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
        <div className={`mb-12 ${centered ? "text-center" : ""}`}>
            {label && (
                <p
                    className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-accent-light" : "text-accent"
                        }`}
                >
                    {label}
                </p>
            )}
            <div className={`gold-line mb-6 ${centered ? "mx-auto" : ""}`} />
            <h2
                className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium uppercase mb-4 ${light ? "text-white" : "text-text-dark"
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""
                        } ${light ? "text-white/70" : "text-text-medium"}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
