

import ProjectCard from "../../../components/project-card.component";
import { projectData } from "../../../constants/data";

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;