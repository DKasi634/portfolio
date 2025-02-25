import SectionContainer from "../../../components/generic/section-container.component";
import { techStackElements } from "../../../constants/data";

const AboutSection = () => {
    return (
        <SectionContainer id="about" className="bg-light py-8 my-8">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-center ">About Me</h2>

                {/* Content Grid */}
                <div className="flex flex-col-reverse xl:flex-row gap-8 items-start pt-4">
                    {/* Skills Section (Moved Here) */}
                    <div className="w-full xl:w-1/2 ">
                        <h3 className="text-xl font-semibold my-4  w-full text-center inline-block xl:hidden">The main technologies I use</h3>
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
                        <p className="text-sm text-dark/80 font-normal w-full text-center">
                            I'm a passionate Web Developer with over 3 years of programming experience, including 2 years focused on web development. My journey began with a curiosity for problem-solving and evolved into a deep appreciation for creating scalable, user-friendly applications that solve real-world problems.
                        </p>

                        <p className="text-sm text-dark/80 font-normal w-full text-center">
                            My expertise spans both <span className="font-extrabold">frontend</span> and <span className="font-extrabold">backend</span> web development. On the frontend, I specialize in crafting visually appealing and responsive interfaces using technologies like <span className="font-extrabold">HTML</span>, <span className="font-extrabold">CSS</span>, <span className="font-extrabold">JavaScript</span>, <span className="font-extrabold">TypeScript</span>, and <span className="font-extrabold">TailwindCSS</span>. For backend development, I leverage robust frameworks such as <span className="font-extrabold">Django</span> to build secure and efficient server-side logic.
                        </p>

                        <p className="text-sm text-dark/80 font-normal w-full text-center">
                            In addition to full-stack development, I have experience in <span className="font-extrabold">database management</span>, working with both <span className="font-extrabold">SQL</span> databases (such as <span className="font-extrabold">PostgreSQL</span> and <span className="font-extrabold">MySQL</span>) and <span className="font-extrabold">NoSQL</span> solutions like <span className="font-bold">Firebase</span>. This allows me to design and implement data-driven applications tailored to meet diverse business needs.
                        </p>

                        <p className="text-sm text-dark/80 font-normal w-full text-center">
                            While much of my experience has been self-driven and independent, I'm eager to bring my skills to a collaborative environment where I can contribute to team projects and learn from others. I believe that teamwork fosters creativity and innovation, and I'm excited about all opportunities to grow.
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default AboutSection;