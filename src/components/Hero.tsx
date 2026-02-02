"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const nameRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Add jelly animation to letters
        if (nameRef.current) {
            const text = nameRef.current.innerText;
            nameRef.current.innerHTML = text
                .split("")
                .map((char, i) =>
                    char === " "
                        ? " "
                        : `<span class="jelly-letter inline-block" style="animation-delay: ${i * 0.05}s">${char}</span>`
                )
                .join("");
        }
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Greeting */}
                <p className="text-sm md:text-base text-muted-foreground tracking-[0.35em] uppercase mb-6 animate-fade-in">
                    Hello, I&apos;m
                </p>

                {/* Name with jelly effect */}
                <h1
                    ref={nameRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6"
                >
                    Gowthaman S
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in animation-delay-200">
                    AI / ML Engineer | Research Associate | Software Developer
                </p>

                <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-12 animate-fade-in animation-delay-300">
                    Building scalable, data-driven, and research-oriented AI solutions for real-world impact
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
                    <a
                        href="#projects"
                        className="btn inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
                    >
                        View My Work
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="btn inline-flex items-center justify-center px-8 py-3 border border-border rounded-full font-medium hover:bg-muted/50 transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="scroll-arrow flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs tracking-wider uppercase">Scroll</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
