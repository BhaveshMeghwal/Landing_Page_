"use client";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mblue px-6 py-5 md:px-10 lg:px-32">
      <div className="container mx-auto flex justify-between">
    
        <a href="/" className="text-white font-bold text-2xl md:text-4xl">
          Imeleo
        </a>

        <div className="hidden lg:flex lg:flex-grow lg:justify-center">
          <ul className="lg:flex lg:space-x-5 text-white"> 
            <li>
              <a href="/" className="block py-2 lg:px-5 hover:text-gray-200">
                Solutions
              </a>
            </li>
            <li>
              <a href="/services" className="block py-2 lg:px-5 hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2 lg:px-5 hover:text-gray-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="block py-2 lg:px-5 hover:text-gray-200">
                Careers
              </a>
            </li>
            <li>
              <a href="/whyus" className="block py-2 lg:px-5 hover:text-gray-200">
                Why Us
              </a>
            </li>
            <li>
              <a href="/blogs" className="block py-2 lg:px-5 hover:text-gray-200">
                Blogs
              </a>
            </li>
          </ul>
        </div>

      
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full py-2 pl-10 pr-4 bg-white text-black focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:hidden w-full mt-4 lg:mt-0`}
        >
          <ul className="lg:flex lg:space-x-6 text-white">
            <li>
              <a href="/" className="block py-2 lg:py-0 hover:text-gray-200">
                Solutions
              </a>
            </li>
            <li>
              <a href="/services" className="block py-2 lg:py-0 hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2 lg:py-0 hover:text-gray-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="block py-2 lg:py-0 hover:text-gray-200">
                Careers
              </a>
            </li>
            <li>
              <a href="/whyus" className="block py-2 lg:py-0 hover:text-gray-200">
                Why Us
              </a>
            </li>
            <li>
              <a href="/blogs" className="block py-2 lg:py-0 hover:text-gray-200">
                Blogs
              </a>
            </li>
          </ul>

    
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-full py-2 pl-10 pr-4 bg-white text-black focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
