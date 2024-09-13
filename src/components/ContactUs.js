import React from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import contactImg from '../Assets/ContactUs.webp';

const ContactUs = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-800 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-base md:text-xl text-center mb-12 md:mb-16 w-11/12 md:w-2/5 mx-auto">
          Reach out to discuss how we can transform your business with tailored
          solutions and expert support.
        </p>
        
        <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 md:px-8 relative">
          <div className="shadow-lg rounded-3xl">
            <div className="grid md:grid-cols-2 bg-blue-800 text-white rounded-3xl">
              

              <aside className="hidden md:block relative">
                <Image
                  className="absolute bottom-0 left-0 rounded-bl-3xl"
                  src={contactImg}
                  alt="Contact Us Panel"
                />
              </aside>
              
          
              <aside className="p-8 space-y-4 md:p-16">
                <h2 className="text-2xl font-bold md:text-4xl">
                  We help you grow your business faster & easier.
                </h2>
                <p className="text-white md:text-lg">
                  Partner with us to simplify the path to your success. We'll
                  make reaching your business goals faster and easier than ever.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="w-6 h-6 mr-2" />
                    <span>+91-8873-33-8873</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-6 h-6 mr-2" />
                    <a href="mailto:contact@imeleo.com" className="underline">
                      contact@imeleo.com
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href=""
                    className="bg-white text-blue-800 font-semibold px-4 py-3 rounded-lg hover:bg-blue-100"
                  >
                    Contact Us
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
