import React from "react";

const QuoteSection = () => {
  return (
    <div className="bg-[#538bfc] py-12 ">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">
              Empowering Industries with Advanced Wireless Technologies
            </h2>
            <div className="w-16 h-1 bg-[#B2D190] mb-4"></div>
            <p className="text-white text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae itaque natus ad tenetur, laboriosam rerum consequuntur perspiciatis nulla laudantium magni voluptatibus exercitationem laborum alias aspernatur maxime sapiente sequi. Quas.
              Temporibus, soluta repudiandae. Laboriosam voluptas quas soluta laborum, ipsam, in, quam sit perferendis fugit aliquid ab error. Quaerat, tempora. Eius eveniet eaque repellendus dignissimos totam itaque nostrum numquam. Ipsum, eum!
            </p>
            <button className="bg-[#B2D190] text-white px-6 py-2 shadow-md hover:bg-white">
              Know More
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <form className="space-y-4 p-6 shadow-md rounded-md bg-white w-full max-w-sm quote-form">
              <h3 className="text-2xl text-[#1A4861] font-bold">Get Your Quote <br /><span className="text-[#B2D190]">Today!</span></h3>
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
                className="w-full bg-[#B2D190] text-white py-2 rounded-md shadow-md hover:bg-indigo-700"
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
