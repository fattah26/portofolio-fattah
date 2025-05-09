import Image from "next/image"
import Link from "next/link"
import { SOCIALS } from "@/constants"

export default function AboutMe() {
    return(
        <section className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16">
            <div className="self-center">
                <div className="relative rotate-3 aspect-square w-36 sm:w-40 md:w-48 rounded-lg overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow">
                    <Image
                        src="/images/profile.png"
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
                "Hey! I'm <span className="text-primary">Fattah Arif</span> and I'm a Frontend Developer."
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-5 lg:mt-6">
                Hi, I am a Software Engineering student who is delving into the world of web development. 
                Although still a beginner, I am starting to understand the basics of front-end frameworks such as Next.js and Node.js with JavaScript. I want to continue learning and deepen my knowledge of new technologies.
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
    )
}