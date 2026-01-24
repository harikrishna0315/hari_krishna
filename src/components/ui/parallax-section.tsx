'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    index: number;
}

export default function ParallaxSection({ children, className = "", index }: ParallaxSectionProps) {
    const ref = useRef(null);

    // Create a scroll progress value just for this section being at the viewport top
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Transform the CURRENT card as it leaves (gets covered by the next one)
    // It should scale down slightly and get darker to create depth
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
    // Optional: Add a brightness filter if desired, but opacity/bg blending usually works

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity
            }}
            className={`sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-background border-t border-white/5 shadow-2xl ${className}`}
        >
            <div className="relative w-full h-full">
                {children}
            </div>
        </motion.div>
    );
}
