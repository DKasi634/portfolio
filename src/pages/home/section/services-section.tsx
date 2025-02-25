import ServiceCard from "../../../components/service-card.component";
import { servicesData } from "../../../constants/data";



const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
        <p className="text-lg text-center text-dark/80 dark:text-light/80 mb-12">
          Here are the services I provide to help bring your ideas to life.
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:items-center xl:justify-center xl:flex-wrap gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard className="xl:max-w-[20rem] xl:w-full"  key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;