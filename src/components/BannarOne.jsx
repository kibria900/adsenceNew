import React from 'react'
import screen from '../assets/screen.png'
import mobile from '../assets/mobile.png'
import clock from '../assets/clock.png'
const BannarOne = () => {
  return (
   <section className='container1 pt-16 bg-bannarone'>

   <div>
    <h1 className="text-black text-[40px]  text-center mt-[15px]">Here's why 2 million people use</h1>
    <h1 className="text-black text-[40px]  text-center">AdSense</h1>
</div>

 <div className="flex gap-6 mt-[70px]">
    <div className="flex-1">
        <img src={screen} alt="logo" className="mx-auto" />
        <h1 className='text-[20px] font-bold text-center'>Earn money from your site</h1>
        <p className="text-[18px] text-justify text-[#000] pt-4">
            Millions of advertisers compete for ad space on your site. This allows you to earn more, show more relevant ads, and fill more ad space.
        </p>
    </div>
    <div className="flex-1">
        <img src={mobile} alt="logo" className="mx-auto" />
        <h1 className='text-[20px] font-bold text-center'>Mobile-optimized ads</h1>
        <p className="text-[18px] text-justify text-[#000] pt-4">
            Google automatically resizes your ad units to display on desktop or mobile, increasing the likelihood that your ads will be seen and clicked.
        </p>
    </div>
    <div className="flex-1">
        <img src={clock} alt="logo" className="mx-auto" />
        <h1 className='text-[20px] font-bold text-center'>Save time.</h1>
        <p className="text-[18px] text-justify text-[#000] pt-4">
           When you add an AdSense code to your site, Google will automatically show ads that fit your site's layout, saving you the time and effort of changing your ad code.
        </p>
    </div>
</div>
   </section>
  )
}

export default BannarOne
