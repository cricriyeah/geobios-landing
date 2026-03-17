import { ReactNode } from "react";

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
        <a href={href} className="block">
            <div className="service-card bg-white rounded-md p-8 border border-border-light hover:border-accent/30 h-full group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-sm bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-400">
                    <div className="text-primary group-hover:text-accent transition-colors duration-400">
                        {icon}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-text-dark text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-text-medium text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Link indicator */}
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:text-accent transition-colors duration-300">
                    Conocer más
                    <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
