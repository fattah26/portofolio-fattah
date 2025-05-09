import { PROJECTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-10 px-5 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-secondary font-bold mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-zinc-900 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform hover:scale-105 flex flex-col justify-between min-h-[450px]"
          > 
            <div>
              <Image
                src={project.img}
                alt={project.name}
                width={400}
                height={250}
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-6">
            <Link href={project.path}>
                <button className="w-full bg-primary font-semibold text-tertiary px-5 py-2 rounded-full shadow hover:bg-[#f5c23d]">
                  View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
