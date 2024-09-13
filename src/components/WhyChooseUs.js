import React from 'react';
// import { LuUserCog2 } from 'react-icons/lu';
// import { FaBusinessTime, FaRegLightbulb } from 'react-icons/fa';
// import { PiHandshake } from 'react-icons/pi';
// import { TbArrowsDiagonal } from 'react-icons/tb';

const ServiceCard = ({ title, description }) => (
    <div className="bg-white rounded-[28px] border border-gray-300 p-6 flex flex-col items-start text-left  ">
      <div className="mb-4 bg-gray-100 p-2 rounded-full flex items-center justify-center">
        {/* <Icon size={48} className="text-blue-800 h-10 w-10" /> */}
      </div>
      <h3 className="text-3xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-lg leading-5">{description}</p>
    </div>
  
  );
  
  const WhyChooseUs = () => {
    const features = [
            {
              // Icon: LuUserCog2,
              title: "Technical Expertise",
              description: "Team of highly skilled developers, designers, and system architects, working with the latest technologies and best practices"
            },
            {
              // Icon: FaBusinessTime,
              title: "Business Centric Approach",
              description: "Putting business first, providing tailored IT solutions based on the unique needs of each business"
            },
            {
              // Icon: TbArrowsDiagonal,
              title: "Process And Quality Assurance",
              description: "Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions."
            },
            {
              // icon: PiHandshake,
              title: "Support",
              description: "Offering timely support and quick resolution of issues to minimize downtime and disruptions."
            },
            {
              // Icon: FaRegLightbulb,
              title: "Innovation",
              description: "Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions."
            },
            {
              // Icon: TbArrowsDiagonal,
              title: "Scalability",
              description: "Providing scalable IT infrastructure and services that grow as the client's business grows."
            }
          ];
  
    return (
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-800 text-center mb-4">Why Choose Us</h2>
          <p className="text-l md:text-xl text-center mb-12 md:w-2/5 mx-auto ">rusted expertise, cutting-edge technology, and a customer-first approach to drive your success.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default WhyChooseUs;

 