import React from 'react'

const BannarTwo = () => {
  return (
       <section className='container1 pt-16 bg-bannartwo'>
    
       <div>
        <p className='text-black text-[20px]  text-center'>Increase revenue</p>
        <h1 className="text-black text-[40px]  text-center  pt-8">See how much you can</h1>
        <h1 className="text-black text-[40px]  text-center">earn from AdSense</h1>
        <p className='text-black text-[20px]  text-center  pt-[20px]'>To find out potential earnings, choose a category and</p>
        <p className='text-black text-[20px]  text-center'>audience region for your site</p>

    </div>

        <div className='flex gap-6 mt-[70px]'>
            <div className='flex-1 '>
                <h1 className='text-[20px] font-bold text-center bg-[#c9c9ba] py-2'>Choose a region</h1>
            </div>
            <div className='flex-1'>
            <h1 className='text-[20px] font-bold text-center bg-[#c9c9ba] py-2'>Choose a category.</h1>
            </div>
        </div>
         <div class="flex justify-center pt-[20px]">
  <button class="py-[10px] px-[30px] bg-[#7da5e2] text-red-600 hover:bg-black hover:text-white font-semibold rounded transition my-3 me-2 ">Calculate</button>
        </div>
       </section>
  )
}

export default BannarTwo
