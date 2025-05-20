import React from 'react'
import Google from '../assets/Google.png'

const NavBar = () => {
  return (
  <div className="menu fixed top-0 left-0 w-full bg-[#e5e7e9] shadow-md z-50 px-6 py-3 flex items-center justify-between ">
  
  <div className="flex items-center gap-2">
    <img src={Google} alt="logo" className="h-10" />
    <p className="text-[20px] text-textnew font-semibold">AdSense</p>
  </div>

  <div>
    <ul className="flex gap-x-8 text-textnew text-[17px] font-medium ">
      <li className="hover:text-red-600 transition "><a href="#">Home</a></li>
      <li className="hover:text-red-600 transition"><a href="#">Solution</a></li>
      <li className="hover:text-red-600 transition"><a href="#">Success Story</a></li>
      <li className="hover:text-red-600 transition"><a href="#">Resources</a></li>
      <li className="hover:text-red-600 transition"><a href="#">Blog</a></li>
    </ul>
  </div>

  <div className="flex gap-4">
    <button className="py-2 px-5 bg-amber-50 hover:bg-amber-900 text-amber-700 hover:text-white font-semibold rounded-md transition">
      Sign In
    </button>
    <button className="py-2 px-5 bg-white text-red-600 hover:bg-black hover:text-white font-semibold rounded-md transition">
      Get Started
    </button>
  </div>

</div>
  )
}

export default NavBar
