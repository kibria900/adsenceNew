import React from 'react';
import screen from '../assets/screen.png';
import mobile from '../assets/mobile.png';
import clock from '../assets/clock.png';

const BannarOne = () => {
  return (
    <>
      <Heading />
      <section className="bg-bannarone py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Items
            heading="Earn money from your site"
            img={screen}
            headingp="Millions of advertisers compete for ad space on your site. This allows you to earn more, show more relevant ads, and fill more ad space."
          />
          <Items
            heading="Mobile-optimized ads"
            img={mobile}
            headingp="Google automatically resizes your ad units to display on desktop or mobile, increasing the likelihood that your ads will be seen and clicked."
          />
          <Items
            heading="Save time."
            img={clock}
            headingp="When you add an AdSense code to your site, Google will automatically show ads that fit your site's layout, saving you the time and effort of changing your ad code."
          />
        </div>
      </section>
    </>
  );
};

export default BannarOne;

const Items = (props) => {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-md`}>
      <img src={props.img} alt="logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-xl font-bold text-center mb-2">{props.heading}</h1>
      <p className="text-base text-justify text-[#000]">{props.headingp}</p>
    </div>
  );
};

const Heading = () => {
  return (
    <section className="bg-bannarone py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
          Here's why 2 million people use
        </h1>
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
          AdSense
        </h1>
      </div>
    </section>
  );
};
