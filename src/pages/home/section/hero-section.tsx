import BaseButton, { buttonType } from "../../../components/base-button.component";
import SectionContainer from "../../../components/generic/section-container.component";
import ProfileImage from "../../../assets/images/image-profile.png";
import { ScrollParallax } from "react-just-parallax";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const HeroSection = () => {
    return (
        <SectionContainer id="hero" className="py-16 bg-gray-100 dark:bg-gray-900 text-dark">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[37%_60%] gap-8 items-center">
                    {/* Left Side: Catchy Text Content */}
                    <div className="flex flex-col items-center lg:items-start  justify-center space-y-6">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight w-full text-center">
                            Turning Ideas into Digital Experiences
                        </h1>
                        <p className="md:text-lg text-dark/80 w-full text-center">
                            As a passionate Web Developer, I craft scalable and user-friendly applications that solve real-world problems.
                        </p>
                        <div className="flex items-center justify-center gap-4 lg:justify-start w-full">
                            <BaseButton
                                type={buttonType.clear}
                                className="!text-blue  !border-blue !text-xs !font-bold hover:!border-blue hover:!bg-blue hover:!text-light hover:!font-bold"
                                href="#portfolio"
                            >
                                View Projects
                            </BaseButton>
                            <BaseButton
                                type={buttonType.dark} className="!text-xs !font-bold"
                                href="#about"
                            >
                                Learn More About Me
                            </BaseButton>
                        </div>
                    </div>

                    {/* Right Side: Profile Image */}
                    <div className="relative flex justify-center items-center">
                        <div className="w-full h-full my-auto max-w-md lg:max-w-lg relative shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            <img
                                src={ProfileImage}
                                alt="profile"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                            />
                        </div>
                        <ScrollParallax isAbsolutelyPositioned>
                            <div className="absolute px-8 py-4 bg-blue-transparent border border-dark-transparent rounded-lg backdrop-blur-sm w-fit flex flex-col items-center justify-start -left-6 -top-[1rem] ">
                                <FaChartLine className="text-3xl text-blue-500" />
                                <div>
                                    <p className="font-bold w-full text-center"> <span className="text-xl">3+</span>  Years</p>
                                    <p className="text-sm font-semibold w-full text-center text-gray-600 dark:text-gray-400">of Experience</p>
                                </div>
                            </div>
                        </ScrollParallax>
                        <ScrollParallax isAbsolutelyPositioned>
                            <div className="absolute px-8 py-4 bg-blue-transparent rounded-lg backdrop-blur-sm w-fit flex flex-col items-center justify-start -right-6 top-1/2 translate-y-1/2">
                                <MdOutlineComputer className="text-3xl text-blue-500" />
                                <div>
                                    <p className="font-bold w-full text-center"><span className="text-xl">10+ </span>Projects</p>
                                    <p className="text-sm font-semibold w-full text-center text-gray-600 dark:text-gray-400">Completed</p>
                                </div>
                            </div>
                        </ScrollParallax>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default HeroSection;