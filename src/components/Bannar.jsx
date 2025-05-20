import React from 'react'
import BannarPic from '../assets/BannarPic.png'

const Bannar = () => {
  return (
    <section className='relative w-full h-screen'>
    <img src={BannarPic} alt="#" className='w-full h-screen'/>

     <div className="absolute inset-0 flex items-center justify-center">
      <div className='text-center text-white px-4'>
            <h1 className="text-[60px] ">Your content is</h1>
            <h1 className='text-[60px] '>valuable to us.</h1>
            <p className="text-amber-50 mt-[10px] text-[20px]">While it takes time to create content, it shouldn't take time to monetize it.</p>
              <button class="py-[10px] px-[30px]  bg-white text-red-600 hover:bg-black hover:text-white font-semibold rounded transition my-3 me-2">Get started</button>
              </div>
        </div>

    </section>
  )
}

export default Bannar
