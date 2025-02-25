

import SectionContainer from "../../../components/generic/section-container.component";
import ProjectCard from "../../../components/project-card.component";
import { projectData } from "../../../constants/data";

const ProjectsSection = () => {
  return (
    <SectionContainer id="portfolio" className="my-2 py-8">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center my-6">Projects I've worked on</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:flex xl:items-start xl:justify-start xl:flex-wrap">
          {projectData.map((project, index) => (
            <ProjectCard className="xl:max-w-[24rem]" key={index} project={project} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;