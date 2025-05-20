import React from 'react'

const Footer = () => {
  return (
   <section className='container2 bg-[#f1f3f4] border-t border-[#dadce0]'>
 <div className="flex gap-6 mt-[70px]">

    <div className="flex-1">
  <h1 className="text-[20px] font-bold mb-4">Education and support</h1>
  <ul className="space-y-3 text-[18px] font-medium text-black list-none">
    <li>
      <a href="#" className="no-underline hover:font-bold">Help Center</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">AdSense Help Forum</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">Certified Publishing Partner</a>
    </li>
  </ul>
</div>

    <div className="flex-1">
  <h1 className="text-[20px] font-bold mb-4">Developer</h1>
  <ul className="space-y-3 text-[18px] font-medium text-black list-none">
    <li>
      <a href="#" className="no-underline hover:font-bold">Google Developers site</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">AdSense Management API</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">AdSense Custom Search Ads</a>
    </li>
  </ul>
</div>
   <div className="flex-1">
  <h1 className="text-[20px] font-bold mb-4">Related Products</h1>
  <ul className="space-y-3 text-[18px] font-medium text-black list-none">
    <li>
      <a href="#" className="no-underline hover:font-bold">Google Ads</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">Google Ad Manager</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">Google AdMob</a>
    </li>
     <li>
      <a href="#" className="no-underline hover:font-bold">AdSense for Shopping</a>
    </li>
     <li>
      <a href="#" className="no-underline hover:font-bold">Google Site Kit</a>
    </li>
     <li>
      <a href="#" className="no-underline hover:font-bold">Blogger</a>
    </li>

  </ul>
</div>

     <div className="flex-1">
  <h1 className="text-[20px] font-bold mb-4">Other services provided by Google</h1>
  <ul className="space-y-3 text-[18px] font-medium text-black list-none">
    <li>
      <a href="#" className="no-underline hover:font-bold">Business services</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">Google Workspace</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">Google Analytics</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">Think with Google</a>
    </li>
    <li>
      <a href="#" className="no-underline hover:font-bold">Google Domains</a>
    </li>
  </ul>
</div>
</div>







<footer className="bg-[#f1f3f4] text-[#5f6368] ">
  <div className=" mx-auto px-4 py-6   border-t border-[#dadce0]">
    
    <div className="flex flex-wrap justify-start gap-4 ">
      <a href="#" className="hover:underline">English</a>
      <a href="#" className="hover:underline">Help</a>
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Terms</a>
    </div>

    <div className="text-center md:text-right">
      <span className='text-[red] font-bold'>© 2025 Golam Kibria Hassan</span>
    </div>
  </div>
</footer>

   </section>
  )
}

export default Footer
