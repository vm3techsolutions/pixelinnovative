import React from 'react';

const Newsletter = () => {
  return (
    <>
      <div className="py-24 ">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-primary">
            Stay Updated
            {/* <span className="bottom-[-8px] left-0 w-12 h-1 bg-[#B2D190]"></span> */}
            <span className="text-secondary"> with Us</span>
          </h3>
          <p className="mt-4 text-gray-600">
            Subscribe to our newsletter for the latest updates, tips, and insights.
          </p>
        </div>

        {/* Subscribe Form */}
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2D190]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary hover:text-primary transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            We respect your privacy and will never share your email address.
          </p>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
