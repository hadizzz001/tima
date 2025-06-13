"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const SLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null; // Hide component after animation

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ebebd3] z-[9999]">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img
          src="https://res.cloudinary.com/dsctzrmng/image/upload/v1749828572/Gold_Elegant_Fashion_Brand_Logo.pdf_page-0001_gbrwch.webp"
          alt="S Loader"
          width={200}
          height={200}
          className="w-36 h-36 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default SLoader;
