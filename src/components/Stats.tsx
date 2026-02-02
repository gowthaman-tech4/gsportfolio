"use client";

import { useEffect, useState } from "react";

interface StatItem {
    value: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    { value: 6, suffix: "+", label: "Hackathon Awards" },
    { value: 5, suffix: "+", label: "AI/ML Projects" },
    { value: 4, suffix: "", label: "Certifications" },
    { value: 1, suffix: "", label: "SIH Grand Finale" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`stat-${value}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [value, isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <span id={`stat-${value}`}>
            {count}
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-16 px-6 bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="space-y-2">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-primary-foreground/70 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
