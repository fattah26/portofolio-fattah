"use client";
import { motion } from "framer-motion";

import { TECH } from "@/constants";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
export default function Tech() {
  return (
    <section className="mt-16 lg:mt-32">
      <div className="flex flex-wrap w-full gap-10 lg:gap-20">
        {TECH.map((tec) => (
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={tec.id}
              className="relative cursor-pointer overflow-hidden"
            >
              <Tippy
                content={tec.name}
                animation="scale"
                placement="bottom"
                arrow={true}
                theme="rounded"
              >
                <Image
                  src={tec.src}
                  alt={tec.alt}
                  width={80}
                  height={80}
                  className="w-10 h-10 lg:w-20 lg:h-20 transition-transform duration-300 ease-in-out filter hover:brightness-0 dark:hover:brightness-0 dark:invert"
                />
              </Tippy>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
