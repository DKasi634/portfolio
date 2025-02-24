// import SectionContainer from "../components/generic/section-container.component"
import AboutSection from "./home/section/about-section"
import HeroSection from "./home/section/hero-section"
import ProjectsSection from "./home/section/projects-section"


const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </div>
  )
}

export default HomePage