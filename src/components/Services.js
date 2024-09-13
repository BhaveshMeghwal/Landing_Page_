import React from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon, UserIcon, SquaresPlusIcon, CloudIcon, CircleStackIcon } from '@heroicons/react/16/solid';

const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-white rounded-[28px] border border-gray-300 p-6 flex flex-col items-start text-left  ">
    <div className="mb-4 bg-gray-100 p-2 rounded-full flex items-center justify-center">
      <Icon size={48} className="text-blue-800 h-10 w-10" />
    </div>
    <h3 className="text-3xl font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-lg leading-5">{description}</p>
  </div>

);

const Services = () => {
  const services = [
    {
        Icon: CodeBracketIcon,
      title: "Web App Development",
      description: "Building cutting-edge, high-performing web apps tailored to suit your business"
    },
    {
        Icon: DevicePhoneMobileIcon,
      title: "App Development",
      description: "Crafting exceptional mobile experiences that transform how businesses engage with the users on the go"
    },
    {
        Icon: UserIcon,
      title: "IT Consulting",
      description: "Strategic IT consulting services designed to help businesses navigate the ever-evolving technology landscape"
    },
    {
        Icon: SquaresPlusIcon,
      title: "Customer Software Development",
      description: "Enterprise-grade, bespoke solutions that perfectly align with your business needs and goals."
    },
    {
        Icon: CloudIcon,
      title: "Cloud Services",
      description: "Empower businesses to unlock the full potential of cloud computing ensuring flexibility, scalability, and security"
    },
    {
        Icon: CircleStackIcon,
      title: "Data Engineering",
      description: "Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-800 text-center mb-4">Services</h2>
        <p className="text-l md:text-xl text-center mb-12 md:w-2/5 mx-auto ">Comprehensive business services designed to support growth and enhance your competitive edge.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


