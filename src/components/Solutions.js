import React from 'react';

const SolutionCard = ({ image, title, description }) => (
  <div 
    className="w-full h-auto max-w-[384px] border overflow-hidden  
    rounded-[28px] flex flex-col p-6 gap-4 bg-white">
    
    <div className="mb-4">
      <img src={image} alt={title} className="w-full h-60 object-cover rounded-lg" />
    </div>
    
    <div className="flex flex-col justify-start"> 
      <h3 className="text-xl md:text-3xl font-semibold text-mblue mb-2">{title}</h3>
      <p className="text-sm md:text-lg leading-5 text-gray-600">{description}</p>
    </div>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      image: "https://www.2008php.com/2024_smallimg/2024-09-08/20240908223113.jpg",
      title: "Content Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. Lorem ipsum dolor sit amet, consectetu"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgfR4qhW_vpvNQiXPybjuyEH3apqkzbMUN9raxCSyTeTTa5mqZqDMAlT7ow1rieKRzxg&usqp=CAU",
      title: "Employee Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. Lorem ipsum dolor sit amet, consectetu"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrnTprr_zgE8NEgB5KT00S5XFjTCP7--OFyt5mV9tsEzbcmNrRVg5_9O9OGTsa8fZK0I&usqp=CAU",
      title: "Vehicle Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. Lorem ipsum dolor sit amet, consectetu"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJOAgiJz3aSncLvSpqtfbUxfyc6QjGVnmhDQWGTCio8mSSzt21mTW-IXhTJr9EXHZ8y4&usqp=CAU",
      title: "Lead Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. Lorem ipsum dolor sit amet, consectetu"
    },
    {
      image: "https://i.postimg.cc/wTbrNV6H/Logistics-Manager.jpg",
      title: "Inventory Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. Lorem ipsum dolor sit amet, consectetu"
    },
    {
      image: "https://www.iehrdcouncil.com/images/hahr.jpg",
      title: "Hospital Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. Lorem ipsum dolor sit amet, consectetu"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-800 text-center mb-4">Solutions</h2>
        <p className="text-base md:text-xl text-center mb-8 md:mb-12 w-11/12 md:w-3/5 mx-auto">
          Innovative software solutions tailored to streamline your business operations and maximize efficiency.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-5">
          {solutions.map((solution, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-[384px]"> 
                <SolutionCard {...solution} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
