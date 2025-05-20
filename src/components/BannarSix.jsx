import React from 'react'
import unnamed1 from '../assets/unnamed1.jpg'

const BannarSix = () => {
  return (
    <section className="w-full bg-white text-center ">
      <div className="relative">
        <img src={unnamed1} alt="#" className='w-full h-auto object-cover' />

        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full mx-4">
            
            <p className="text-lg text-gray-800 mb-4 text-[30px]">
              Just add an AdSense code to your website and it will start working immediately.
            </p>
            <p className=" text-gray-500">
              — Jack Herrick, founder and CEO of WikiHow
            </p>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              See success stories
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannarSix
