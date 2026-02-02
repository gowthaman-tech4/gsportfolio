"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out after 1.5s
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 1500);

        // Remove from DOM after fade animation completes
        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="text-center">
                {/* Animated Logo/Name */}
                <div className="relative">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold overflow-hidden">
                        <span className="inline-block animate-slide-up">G</span>
                        <span className="inline-block animate-slide-up animation-delay-100">o</span>
                        <span className="inline-block animate-slide-up animation-delay-200">w</span>
                        <span className="inline-block animate-slide-up animation-delay-300">t</span>
                        <span className="inline-block animate-slide-up animation-delay-400">h</span>
                        <span className="inline-block animate-slide-up animation-delay-500">a</span>
                        <span className="inline-block animate-slide-up" style={{ animationDelay: "0.6s" }}>m</span>
                        <span className="inline-block animate-slide-up" style={{ animationDelay: "0.7s" }}>a</span>
                        <span className="inline-block animate-slide-up" style={{ animationDelay: "0.8s" }}>n</span>
                    </h1>
                </div>

                {/* Loading dots */}
                <div className="flex justify-center gap-1 mt-6">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-100"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200"></span>
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-teal-400/20"></div>
            </div>
        </div>
    );
}
