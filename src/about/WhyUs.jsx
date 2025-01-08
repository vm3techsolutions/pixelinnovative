import React from 'react';
import  whyUs  from '../assets/whyUs.jpg';

const WhyUs = () => {
  return (
    <section className="relative flex flex-col lg:flex-row h-[70vh]">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-8 ml-24">
      <h3 className="text-4xl mt-12 text-primary font-bold relative inline-block">
          Why
          <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-secondary"></span>
          <span className="text-secondary"> Us?</span>
        </h3>
        <p className="my-8 mx-auto ">Pixel Innovative Solutions provides advanced and innovative solutions  designed to meet the needs of challenging environments. Our solutions, including Smart Helmets and PoC Radios, combine cutting-edge technology with dedicated customer support, ensuring seamless operations and enhanced business performance.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="relative w-1/2 h-full">
        <img
          src={whyUs}
          alt="Why Us"
          className="absolute right-0 top-0 w-[60%] h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute right-0 top-0 w-[60%] h-full bg-primary opacity-50" />
      </div>
    </section>
  );
};

export default WhyUs;
