import React from 'react';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';

const FeatureItem = ({ title}) => (
  <div className="flex items-center space-x-4 mt-2">
    <div className=" rounded-full">
      <CheckIcon className='w-10 h-10 font-bold text-mblue'/>
    </div>
    <div>
      <h4 className="font-semibold text-2xl text-gray-800">{title}</h4>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-800 text-center mb-4">
          About Imeleo
        </h2>
        <p className='text-base md:text-xl text-center mb-12 w-11/12 md:w-3/5 mx-auto'>
          Imeleo provides cutting-edge solutions and expert insights to drive your business success in the digital age.
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image section */}
          <div className="lg:w-1/2 w-full">
            <Image 
              src="https://img.freepik.com/premium-photo/ai-image_590832-214.jpg" 
              alt="Team collaboration on a project" 
              width={640} 
              height={384} 
              className="rounded-lg shadow-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
          {/* Text content section */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              We Are Increasing <span className="text-blue-800">Business</span> Success With <span className="text-blue-800">Technology</span>
            </h3>
            <p className="text-gray-600 mb-6">
              At Imeleo, we use technology to help businesses grow, work smarter, and get better results. Our goal is to make it easier for companies to succeed in today&rsquo;s digital world.
            </p>
            <FeatureItem 
              title="Problem Solving" 
            />
            <FeatureItem 
              title="Strategic Growth" 
              
            />
            <FeatureItem 
              title="Enhanced Performance" 
              
            />
            <div className="flex pt-8">
            <a
              href=""
              class=" flex items-center justify-center text-white bg-blue-800 border border-indigo-600 py-2 px-6 gap-2 rounded-md "
            >
              <span>View More</span>
              <svg
                class="w-4"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
