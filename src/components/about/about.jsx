import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/constants";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16">
      <div className="self-center">
        <div className="relative rotate-3 aspect-square w-36 sm:w-40 md:w-48 rounded-lg overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow">
          <Image
            src="/images/profile2.png"
            alt="me making some bug"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grow mt-2">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
          "Hey! I'm <span className="text-primary">Fattah Arif</span> and I'm a
          Frontend Developer."
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-5 lg:mt-6">
          Hi, I'm Fattah Arif Nugroho - a software engineering student and
          frontend developer from Semarang, Indonesia. frontend developer from
          Semarang, Indonesia. I'm currently exploring the world of web
          development, with a focus on modern frameworks such as Next.js and
          React.js and sometimes using laravel. I'm used to building
          user-friendly interfaces and I enjoy learning new technologies to
          improve my skills every day.
        </p>

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
      </div>
    </section>
  );
}
