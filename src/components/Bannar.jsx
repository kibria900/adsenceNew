import React from 'react';
import BannarPic from '../assets/BannarPic.png';

const Bannar = () => {
  return (
    <section className='relative w-full h-screen'>
      <img src={BannarPic} alt="Banner" className='w-full h-screen object-cover' />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className='text-center text-white px-4'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold">Your content is</h1>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold'>valuable to us.</h1>
          <p className="text-amber-50 mt-3 text-base sm:text-lg md:text-xl">
            While it takes time to create content, it shouldn't take time to monetize it.
          </p>
          <button className="py-2 px-6 bg-white text-red-600 hover:bg-black hover:text-white font-semibold rounded transition mt-4">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
