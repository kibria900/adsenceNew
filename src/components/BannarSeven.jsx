import React from 'react'
import screen from '../assets/screen.png'
import Pic1 from '../assets/Pic1.png'
import Pic2 from '../assets/Pic2.png'

const BannarSeven = () => {
  return (
     <section className='container1 pt-16 bg-bannarone'>
    
       <div>
        <h1 className="text-black text-[40px]  text-center mt-[15px]">Let's get started.</h1>
        <h1 className="text-black text-[15px]  text-center">To start using AdSense, you only need 3 things</h1>
    </div>
    
     <div className="flex gap-6 mt-[70px]">
        <div className="flex-1">
            <img src={Pic2} alt="logo" className="mx-auto" />
            <h1 className='text-[20px] font-bold text-center'>A Google account</h1>
            <p className="text-[18px] text-justify text-[#000] pt-4">
                If you already use Gmail or another Google service, you've already met one requirement. If you haven't, click the Sign up button and we'll help you create your account. This will allow you to sign in to any Google service, including AdSense.
            </p>
        </div>
        <div className="flex-1">
            <img src={Pic1} alt="logo" className="mx-auto" />
           <h1 className='text-[20px] font-bold text-center'>Phone number and address</h1>
            <p className="text-[18px] text-justify text-[#000] pt-4">
                The phone number and address mentioned in your bank account. We will use this to pay you.
            </p>
        </div>
        <div className="flex-1">
            <img src={screen} alt="logo" className="mx-auto" />
           <h1 className='text-[20px] font-bold text-center'>Connect your site to AdSense</h1>
            <p className="text-[18px] text-justify text-[#000] pt-4">
               Just add a small piece of code to your site, and Google will take care of the rest.
            </p>
        </div>
    </div>

    <div class="flex justify-center pt-[20px]">
  <button class="py-[10px] px-[30px] bg-[#7da5e2] text-red-600 hover:bg-black hover:text-white font-semibold rounded transition my-3 me-2 ">Get started</button>
        </div>

        <div>
        <h1 className="text-black text-[15px]  text-center mt-[15px]">To get help with a specific issue, contact an AdSense specialist.</h1>
        <h1 className="text-black text-[20px]  text-center hover:font-bold">Contact an expert</h1>
    </div>
       </section>
  )
}

export default BannarSeven
