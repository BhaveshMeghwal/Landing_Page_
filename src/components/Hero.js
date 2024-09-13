'use client';
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[80vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://downloadhdwallpapers.in/wp-content/uploads/2017/11/Laptop-Work-Condition-1600x1200.jpg')` 
      }}
    >
      <div className="text-center px-4 md:px-0">
        <h1 className="text-3xl md:text-6xl font-black font-bold text-mblue">
          Business Software
        </h1>
        <h1 className="text-3xl md:text-6xl font-semibold text-mblue mb-4">
          Solutions And Services
        </h1>
        <p className="text-lg md:text-xl text-black mb-8">
          <span className="underline font-bold">Software</span> services and solutions to take your <span className="underline font-bold">Business</span> to the next level 🚀
        </p>
        <div className="space-x-2 md:space-x-4">
          <button className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Know more
          </button>
          <button
            className="bg-white text-black px-4 py-2 md:px-6 md:py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
