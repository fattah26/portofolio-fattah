import { PROJECTS_CERTIFICATE, PROJECTS_FE, PROJECTS_UI } from "@/constants";
import ProjectCard from "@/components/projects/ProjectsCard";

export default function Projects() {
  return (
    <section className="py-10 px-5 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-secondary font-bold mb-12">
        My Projects
      </h1>

      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-secondary mb-6">
            Landing Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_FE.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-secondary mb-6">
            UI/UX Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_UI.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-secondary mb-6">
            Certificate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_CERTIFICATE.map((project) => (
              <ProjectCard key={project.id} project={project} button={false}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}