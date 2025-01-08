import React from "react";

const QuoteSection = () => {
  return (
    <div className="bg-primary py-12 ">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Section */}
          <div className="w-full  md:w-6/7 ">
            <h2 className="text-3xl font-bold text-white mb-4">
              Empowering Industries with Advanced Wireless Technologies
            </h2>
            <div className="w-16 h-1 bg-secondary mb-4"></div>
            <p className="text-white text-md mb-6">
            Welcome to Pixel Innovative Solutions, your trusted partner in Industrial Solutions . Established in 2023, we specialize in providing innovative products and solutions that address the unique needs of modern industries.<br/>
            Our product and solutions range includes Smart Helmets, PoC Radios (Walkie-Talkies), Digital DRIFT, Body-Worn Cameras, and other custom made industrial. With a focus on precision and reliability, our solutions are tailored to meet the specific challenges faced by industries such as steel, construction, oil and gas, manufacturing, Mining and transportation.<br/>
            <span className="font-bold">We are proud to serve a diverse array of industries, bringing expertise and advanced technology to businesses across critical sectors.</span>
            </p>
            <button className="bg-secondary text-white px-6 py-2 shadow-md hover:bg-white">
              Know More
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-3/10 flex justify-center">
            <form className="space-y-4 p-6 shadow-md rounded-md bg-white w-full max-w-sm quote-form">
              <h3 className="text-2xl text-primary font-bold">Get Your Quote <br /><span className="text-secondary">Today!</span></h3>
              <div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Requirement*"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 rounded-md shadow-md hover:bg-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
