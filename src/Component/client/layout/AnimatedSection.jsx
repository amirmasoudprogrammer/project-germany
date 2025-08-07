"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedSection({ children, direction = "up", delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const getDirectionVariants = () => {
        const base = { opacity: 0, scale: 0.9, filter: "blur(8px)" };
        switch (direction) {
            case "left":
                return {
                    hidden: { ...base, x: -100 },
                    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
                };
            case "right":
                return {
                    hidden: { ...base, x: 100 },
                    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
                };
            case "down":
                return {
                    hidden: { ...base, y: -100 },
                    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                };
            case "up":
            default:
                return {
                    hidden: { ...base, y: 100 },
                    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={getDirectionVariants()}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay, ease: "easeOut" }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSection;

