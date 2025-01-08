import React from 'react';
import aboutImage from '../assets/about.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 px-24">
      <div className="container mx-auto flex items-center justify-between flex-col lg:flex-row">
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center lg:text-left mr-8">
        <h3 className="text-4xl mt-12 text-primary font-bold relative inline-block">
          Our
          <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-secondary"></span>
          <span className="text-secondary"> Story</span>
        </h3>
        <p className="my-8 mx-auto ">Founded in 2023 as a start-upcompany,Pixel Innovative Solutions emerged to redefine how industries approach various mission critical solutions . Understanding the operational challenges of modern businesses, we set out to design tools that simplify and enhance communication workflows. <br/>
        With products like Smart Helmets, Digital drift for underground mines and PoC Radios,        we have built a reputation for innovation and reliability. Our journey reflects our    commitment to providing solutions that meet the needs of our clients while setting       new benchmarks in industrial technology.
        </p>
      
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img 
            src={aboutImage} 
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
