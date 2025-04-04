import { Service } from "../types"; // Define a type for services

interface ServiceCardProps {
  service: Service;
  className?:string
}

const ServiceCard = ({ service , className="" }: ServiceCardProps) => {
  return (
    <div className={`${className} bg-white border border-blue-transparent cursor-pointer shadow-dark-transparent rounded-lg shadow-md p-6 text-center hover:shadow-lg `}>
      {/* Icon */}
      <div className="text-4xl text-blue mb-4 w-full flex items-center justify-center">{service.icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{service.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;