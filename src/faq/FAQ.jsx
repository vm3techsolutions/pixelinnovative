import React, {useState} from 'react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
      {
        question: "What products does Pixel Innovative Solutions offer?",
        answer: "We offer a range of advanced wireless communication products, including Smart Helmets, PoC Radios (Walkie-Talkies), Digital DIFT, Body-Worn Cameras, and other industrial wireless solutions.",
      },
      {
        question: "What industries do your products serve?",
        answer: "Our products are designed for industries like manufacturing, construction, oil and gas, mining, transportation, and public safety, where reliable communication is crucial for safety and efficiency.",
      },
      {
        question: "Are your PoC Radios suitable for large-scale operations?",
        answer: "Yes, our PoC Radios are designed for large-scale operations, offering reliable communication over wide areas and providing a scalable solution for businesses of any size.",
      },
      {
        question: "Can your Smart Helmets be used in extreme environments?",
        answer: "Yes, our Smart Helmets are built to withstand tough conditions, offering both safety features and seamless communication in harsh and hazardous environments.",
      },
      {
        question: "Do you offer customization for your products?",
        answer: "Yes, we offer customized solutions to meet the specific needs of your business. Contact us to discuss your requirements.",
      },
      {
        question: "How do I get technical support for your products?",
        answer: "We provide excellent customer support and technical assistance. You can reach out to our support team via phone or email for any product-related queries or issues.",
      },
      {
        question: "Are your products environmentally friendly?",
        answer: "Yes, we are committed to sustainability and strive to provide eco-friendly products that have a minimal environmental impact without compromising on quality or performance.",
      },
      {
        question: "How can I place an order?",
        answer: "You can place an order directly through our website or contact our sales team for assistance with your purchase."
      },

    ];
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <>
       <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                
                <span> <span className="font-bold text-xl">{index + 1}.</span>  {faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-500 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default FAQ;