"use client";

import { useEffect, useRef } from "react";

export default function Signature() {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            pathRef.current.style.strokeDasharray = `${length}`;
            pathRef.current.style.strokeDashoffset = `${length}`;
        }
    }, []);

    return (
        <svg
            viewBox="0 0 200 60"
            className="w-32 h-10 text-foreground"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={pathRef}
                d="M10 45 C15 20, 25 15, 30 25 C35 35, 30 45, 25 45 C20 45, 18 35, 25 25 L35 45 M40 25 L40 45 M40 35 L50 35 M40 45 L50 45 M55 25 C50 25, 50 35, 55 35 C60 35, 60 45, 55 45 C50 45, 50 35, 55 35 M65 25 L75 45 M75 25 L65 45 M80 25 L90 35 L80 45 M95 25 L95 45 M100 25 L110 35 L100 45 M115 25 C110 25, 110 35, 115 35 C120 35, 120 45, 115 45 C110 45, 110 35, 115 35 M125 25 L125 45 M125 25 C130 25, 135 30, 135 35 L125 35 M140 35 C140 25, 150 25, 150 35 C150 45, 140 45, 140 35 M155 45 C155 35, 165 30, 165 25 M155 35 L165 35 M175 25 L175 45 M175 25 L185 40"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="signature-path"
            />
        </svg>
    );
}
