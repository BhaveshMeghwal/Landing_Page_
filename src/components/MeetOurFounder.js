import React from "react";
import { SparklesIcon } from "@heroicons/react/16/solid";
// import { FaLinkedin } from "react-icons/fa";

const MeetOurFounder = () => {
  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
      
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6 flex items-center">
              <SparklesIcon className="text-blue-800 w-10 h-10 md:w-12 md:h-12 mr-2"/>
              Meet Our&nbsp;<span className="text-blue-800">Founder</span>
            </h2>
            <div className="text-lg md:text-2xl space-y-4">
              <p className="text-gray-600">
                With decades of industry experience,{" "}
                <span className="font-bold">Mayank</span> is a highly
                skilled software developer, solution architect, and technology
                entrepreneur. He specializes in building modular and scalable
                cross-platform software solutions.
              </p>
              <p className="text-gray-600">
                Over the past, he has worked with numerous businesses, helping
                them overcome complex challenges by building innovative
                technology solutions.
              </p>
              <p className="text-gray-600">
                Admired by clients, developers, and designers alike, his
                entrepreneurial vision drives{" "}
                <span className="font-bold">Imeleo</span>,
                empowering businesses with cutting-edge technology solutions,
                fueling growth and innovation.
              </p>
            </div>
          </div>
     
          <div className="lg:w-1/2 w-full px-6 lg:px-0">
            <div className="bg-blue-100 rounded-3xl p-6">
              <img
                src="https://www.imeleo.com/_next/image?url=%2Fimages%2Ffounder.png&w=1080&q=75"
                alt="Mayank Mahajan, Founder of Imeleo"
                className="w-full rounded-2xl mb-4"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-800">
                    Mayank Mahajan
                  </h3><a
                  href="https://www.linkedin.com/in/mynkmhjn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-900"
                >
                  {/* <FaLinkedin className="w-5 h-5 mr-4 fill-mblue" /> */}
                </a>
                
                  <p className="text-gray-600">Founder, Imeleo</p>
                
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurFounder;
