import { LiaAngleRightSolid } from "react-icons/lia";
import { Project } from "../types"; // Define a type for projects
import BaseButton from "./base-button.component";

interface ProjectCardProps {
    className?:string,
    project: Project;
}

const ProjectCard = ({className="", project }: ProjectCardProps) => {
    return (
        <div
            className={`${className} group block bg-light-variant border-2 cursor-pointer border-blue-transparent rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300 p-2`}
        >
            {/* Image */}
            <div className="w-full h-48 border border-dark-transparent overflow-hidden rounded-md">
                <img
                    src={project.image}
                    alt={project.name}
                    className=" object-cover group-hover:scale-[1.02] w-full h-full"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col items-center justify-center gap-2">
                {/* Title */}
                <h3 className="text-xl font-bold text-dark group-hover:text-blue w-full text-center">
                    {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark  line-clamp-4 w-full text-center">
                    {project.description}
                </p>

                {/* Action Button */}
                <a href={project.link} target="_blank"
                    rel="noopener noreferrer" className="w-fit h-fit mx-auto mt-8">
                    <BaseButton className="!py-[0.4rem] !px-4 !text-xs font-bold"> View Project <LiaAngleRightSolid className="ml-2"/></BaseButton>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;