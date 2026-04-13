import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0.25, duration = 0.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string; staggerChildren?: number }> = ({ children, className = "", staggerChildren = 0.1 }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerChildren
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
