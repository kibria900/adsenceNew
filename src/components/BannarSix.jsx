import React from 'react';
import unnamed1 from '../assets/unnamed1.jpg';

const BannarSix = () => {
  return (
    <section className="w-full bg-white text-center">
      <div className="relative">
        <img src={unnamed1} alt="Banner" className="w-full h-auto object-cover max-h-[600px]" />

        <div className="absolute inset-x-0 bottom-6 sm:bottom-10 flex justify-center px-4">
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-lg">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 font-semibold">
              Just add an AdSense code to your website and it will start working immediately.
            </p>
            <p className="text-sm sm:text-base text-gray-500">
              — Jack Herrick, founder and CEO of WikiHow
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              See success stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannarSix;
