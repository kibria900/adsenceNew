import React from 'react';
import screen from '../assets/screen.png';
import Pic1 from '../assets/Pic1.png';
import Pic2 from '../assets/Pic2.png';

const BannarSeven = () => {
  return (
    <>
      <Heading />
      <section className="bg-bannarone py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Items
            heading="A Google account"
            img={Pic2}
            headingp="If you already use Gmail or another Google service, you've already met one requirement. If you haven't, click the Sign up button and we'll help you create your account. This will allow you to sign in to any Google service, including AdSense."
          />
          <Items
            heading="Phone number and address"
            img={Pic1}
            headingp="The phone number and address mentioned in your bank account. We will use this to pay you."
          />
          <Items
            heading="Connect your site to AdSense"
            img={screen}
            headingp="Just add a small piece of code to your site, and Google will take care of the rest."
          />
        </div>
      </section>

      <Btn />
      <Last />
    </>
  );
};

export default BannarSeven;

const Items = ({ heading, img, headingp }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <img src={img} alt="logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-xl font-bold text-center mb-2">{heading}</h1>
      <p className="text-base text-justify text-[#000]">{headingp}</p>
    </div>
  );
};

const Heading = () => {
  return (
    <div className="bg-bannarone py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl text-black font-semibold mb-2">Let's get started.</h1>
        <p className="text-base sm:text-lg text-black">To start using AdSense, you only need 3 things</p>
      </div>
    </div>
  );
};

const Btn = () => {
  return (
    <div className="flex justify-center pt-6">
      <button className="py-2 px-6 bg-[#7da5e2] text-red-600 hover:bg-black hover:text-white font-semibold rounded transition">
        Get started
      </button>
    </div>
  );
};

const Last = () => {
  return (
    <div className="text-center mt-6 px-4">
      <p className="text-sm text-black">To get help with a specific issue, contact an AdSense specialist.</p>
      <h1 className="text-lg text-black hover:font-bold cursor-pointer">Contact an expert</h1>
    </div>
  );
};
