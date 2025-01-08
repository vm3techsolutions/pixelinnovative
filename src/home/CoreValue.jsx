import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faHandshake,
  faHandHoldingHeart,
  faUsersViewfinder,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const CoreValue = () => {
  const coreValues = [
    {
      icon: faLightbulb,
      title: "Innovation",
      content: "We strive to lead in various mission-criticalapplications by continually developing cutting-edge solutions.",
    },
    {
      icon: faHandshake,
      title: "Integrity",
      content: "We build trust through honesty, transparency, and ethical business practices.",
    },
    {
      icon: faHandHoldingHeart,
      title: "Excellence",
      content: "We deliver high-quality solutions that exceed customer expectations.",
    },
    {
      icon: faUsersViewfinder,
      title: "Customer Focus",
      content: "Our customers needs drive everything we do, ensuring tailored and impactful solutions.",
    },
    {
      icon: faUserShield,
      title: "Safety",
      content: "We prioritize safety in all aspects of our products and operations.",
    },
  ];

  return (
    <div className="py-28 mb-6 ">
      {/* Section Heading */}
      <div className="text-center mb-12 ">
        <h3 className="text-4xl mt-12 text-primary font-bold relative inline-block">
          Core
          <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-secondary"></span>
          <span className="text-secondary"> Values</span>
        </h3>
        <p className="text-center my-8 w-[60%] mx-auto">Our core values of innovation, integrity, excellence, customer focus, and safety drive everything we do. They guide our commitment to delivering high-quality, impactful solutions and building strong, lasting relationships with our clients and partners.</p>
      </div>

      {/* Boxes */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 shadow-md bg-primary ${
              index % 2 === 0 ? "translate-y-0" : "translate-y-16"
            }`}
          >
            <div className="text-white text-4xl mb-4">
              <FontAwesomeIcon icon={value.icon} />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              {value.title}
            </h4>
            <p className="text-white text-center">{value.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
