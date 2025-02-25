// import SectionContainer from "../components/generic/section-container.component"
import AboutSection from "./home/section/about-section"
import ContactSection from "./home/section/contacts-section"
import HeroSection from "./home/section/hero-section"
import ProjectsSection from "./home/section/projects-section"
import ServicesSection from "./home/section/services-section"


const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}

export default HomePage