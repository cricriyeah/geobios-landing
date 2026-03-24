"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
    value: string;
    duration?: number;
}

export default function Counter({ value, duration = 2 }: CounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    // Extract number and suffix (like '+' or '%')
    const numericPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");
    
    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });
    
    const displayValue = useTransform(spring, (current) => 
        Math.floor(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(numericPart);
        }
    }, [isInView, numericPart, spring]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}
