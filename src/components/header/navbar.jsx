"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NAVIGATION } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeButton } from "./themeButton";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  const isLinkActive = (path) => {
    return pathname === path ? "text-primary dark:text-primary" : "";
  };

  return (
    <nav className="w-full h-fit max-w-5xl mx-auto relative flex gap-2 md:gap-0 justify-between lg:justify-center items-center my-4 px-6 lg:px-0">
      <div className="relative flex bg-secondary dark:bg-tertiary outline-neutral-200 dark:outline-stroke outline-1 hover:outline-2 outline w-fit rounded-full font-semibold text-xs md:text-sm text-neutral-800 dark:text-secondary">
        {NAVIGATION.map((navigation, index) => (
          <motion.div
            key={index}
            className="relative inline-block"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={navigation.path}
              className={`relative h-10 px-4 flex items-center rounded-lg z-10 ${isLinkActive(navigation.path)}`}
            >
              <span className="inline-block">{navigation.name}</span>
            </Link>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#232323] block rounded-3xl z-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <ThemeButton/>
    </nav>
  );
}
