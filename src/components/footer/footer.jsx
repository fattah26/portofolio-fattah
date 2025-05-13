"use client";

import Link from "next/link";
import Image from "next/image";
import { NAVIGATION, SOCIALS } from "@/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="">
      <div className="flex flex-wrap justify-between items-center mx-6 lg:mx-20">
         {/* Bagian Sosial Media */}
            <div className="flex gap-6 w-full md:w-auto md:justify-start mt-5 lg:mt-6">
                    {SOCIALS.map((social, index) => (
                        <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        aria-label={social.name}
                        className="group"
                        >
                         <Image 
                            src={social.src} 
                            width={24}
                            height={24}
                            className="transition-transform duration-300 ease-in-out filter hover:brightness-0 dark:hover:brightness-0 dark:invert"
                        />
                        </Link>
                    ))}
            </div>
      {/* Bagian Navigasi dan Tombol Scroll to Top */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex space-x-5">
          {NAVIGATION.map((navigation, index) => (
            <Link
              key={index}
              href={navigation.path}
              className="text-sm font-medium"
            >
              {navigation.name}
            </Link>
          ))}
        </div>

        {/* Tombol Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="bg-white dark:bg-neutral-800 outline-neutral-200 dark:outline-neutral-700 outline-1 hover:outline-2 outline rounded-full"
          aria-label="Scroll to top"
        >
          <Image
              src="/images/Up 2.svg"
              alt="up"
              width={24}
              height={24}
              className="hover:opacity-80 transition duration-300"
            />
        </button>
      </div>

      </div>

        <div className="w-full mt-7 border-t-[1px] border-stroke pt-6 pb-8 text-center items-center text-xs">
          <h2>©2025, All right reserved.</h2>
        </div>
    </footer>
  );
};
