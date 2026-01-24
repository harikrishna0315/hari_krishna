'use client';
import { motion } from 'motion/react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150, rotateX: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{
                duration: 1.2,
                type: "spring",
                damping: 20,
                stiffness: 80,
                delay: delay,
            }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
