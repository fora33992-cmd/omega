import React from 'react';
import { ArrowRight, Anchor, Construction, Scan, Ship, Paintbrush, Cylinder, Zap, Flame, Gauge, ClipboardCheck, Container, Radiation, Trestle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

// Expanded Icon Map to cover all services
const iconMap: Record<string, React.ReactNode> = {
  "Anchor": <Anchor size={40} />,
  "Construction": <Construction size={40} />,
  "Scan": <Scan size={40} />,
  "Ship": <Ship size={40} />,
  "Paintbrush": <Paintbrush size={40} />,
  "Cylinder": <Cylinder size={40} />,
  "Trestle": <Construction size={40} />, 
  "Radiation": <Scan size={40} />, 
  "Flame": <Flame size={40} />,
  "Gauge": <Gauge size={40} />,
  "ClipboardCheck": <ClipboardCheck size={40} />,
  "Container": <Container size={40} />,
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative h-[360px] w-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      
      {/* Background Image (Revealed on Hover) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      
      {/* Overlay - White initially, Dark on hover */}
      <div className="absolute inset-0 bg-white opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-omega-dark/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        
        {/* Top: Icon & Title */}
        <div>
          <div className="mb-6 inline-block rounded-lg bg-omega-yellow/10 p-3 text-omega-blue transition-colors duration-500 group-hover:bg-omega-yellow group-hover:text-omega-dark">
            {iconMap[service.iconName] || <Construction size={40} />}
          </div>
          
          <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-omega-dark transition-colors duration-500 group-hover:text-white">
            {service.title}
          </h3>
          <div className="mt-2 h-1 w-12 bg-omega-yellow transition-all duration-500 group-hover:w-full" />
        </div>

        {/* Bottom: Description & CTA */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-200">
            {service.shortDescription}
          </p>
          
          <Link 
            to={`/services#${service.id}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-omega-blue opacity-0 transition-all duration-500 group-hover:text-omega-yellow group-hover:opacity-100"
          >
            <span>Explore Service</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;