"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  exit: { filter: "blur(10px)", transform: "translateY(-20%)", opacity: 0 },
};

const words = ["Engineered", "Assessments", "Strategies", "Initiatives"];

export function AnimatedWord() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-visible" style={{ padding: '0' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-block bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={transition}
          variants={variants}
          style={{ willChange: 'transform, filter, opacity' }}
        >
          {words[currentIndex]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
