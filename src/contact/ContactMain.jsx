import React from 'react';

const ContactMain = () => {
  return (
      <>
    <section className="container mx-auto py-16 px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* Left Side: Contact Information */}
        <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-4xl mt-12 text-primary font-bold relative inline-block">
          Get In
          <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-secondary"></span>
          <span className="text-secondary"> Touch</span>
        </h3>
        <p className="my-8 mx-auto ">We value your inquiries and look forward to assisting you. Please feel free to connect with us through any of the following contact methods.
        </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-md font-semibold text-gray-800">Address:</h4>
              <p className="text-gray-700">S.No.126/2A/1A/1 Flat No.401, Jivan Chaya HSG SOC.PL 21, Kothrud, Pune City, Pune- 411038, Maharashtra</p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800">Phone:</h4>
              <p className="text-gray-700"><a href="+919730305633">+91 9730305633</a></p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800">Email:</h4>
              <p className="text-gray-700"><a href="sales@pixelinnovative.net">sales@pixelinnovative.net</a></p>
            </div>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="w-full lg:w-1/2 p-10 border">
          <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d945.9232202327591!2d73.8163956155139!3d18.497565531167183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sS.No.126%2F2A%2F1A%2F1%20Flat%20No.401%2C%20Jivan%20Chaya%20HSG%20SOC.PL%2021%2C%20Kothrud%2C%20Pune%20City%2C%20Pune-%20411038%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736331114249!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </>
  );
};

export default ContactMain;
