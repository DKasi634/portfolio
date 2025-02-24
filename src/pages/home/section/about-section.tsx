import SectionContainer from "../../../components/generic/section-container.component";
import { techStackElements } from "../../../constants/data";

const AboutSection = () => {
    return (
        <SectionContainer id="about" className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>

                {/* Content Grid */}
                <div className="flex flex-col-reverse xl:flex-row gap-8 items-start pt-12">
                    {/* Skills Section (Moved Here) */}
                    <div className="w-full xl:w-1/2 ">
                        <h3 className="text-2xl font-bold my-4  w-full text-center inline-block xl:hidden">Skills</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {techStackElements.map((skill, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-200 bg-gray-transparent border border-dark-transparent rounded-lg p-4 flex flex-col items-center justify-center shadow-sm transition duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-10 h-10 object-contain mb-2"
                                    />
                                    <p className="text-lg font-bold text-dark capitalize">{skill.name}</p>
                                    <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                                        {skill.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Content */}
                    <div className="w-full xl:w-1/2 flex flex-col items-start justify-start gap-4 pt-8 text-center">
                        <p className="text-sm text-dark/80 font-semibold w-full text-center">
                            I'm a passionate Web Developer with over 3 years of programming experience, including 2 years focused on web development. My journey began with a curiosity for problem-solving and evolved into a deep appreciation for creating scalable, user-friendly applications that make a real impact.
                        </p>
                        <p className="text-sm text-dark/80 font-semibold w-full text-center">
                            Over time, I've honed my skills in modern technologies such as JavaScript, TypeScript, React, Django, and TailwindCSS. These tools allow me to build robust and efficient solutions tailored to meet the needs of users and businesses alike.
                            While much of my experience has been self-driven and independent, I'm eager to bring my skills to a collaborative environment where I can contribute to team projects and learn from others. I believe that teamwork fosters creativity and innovation, and I'm excited about the opportunity to grow alongside like-minded professionals.
                        </p>
                        <p className="text-sm text-dark/80 font-semibold w-full text-center">
                            Beyond coding, I enjoy exploring new technologies, experimenting with side projects.
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default AboutSection;