import React from 'react'
import vision from '../assets/vision.png';
import mission from '../assets/mission.png';

const VisionMission = () => {
  return (
      <>
    <div className=" mt-16 px-16 bg-primary flex items-center text-white">
      <div className="w-3/5 py-14">
        <h3 className="text-2xl font-semibold">Our Vision</h3>
        <p className="mt-4">
          Our vision is to create a positive impact on the community through innovative solutions.
          Our mission is to deliver excellence in every project we undertake.
        </p>
      </div>
      <div className="w-2/5 flex justify-center">
        <img src={vision} alt="Vision" className="w-[300px] h-auto mt-[-150px]" />
      </div>
      </div>

<div className="px-16 bg-secondary flex items-center text-white">
      <div className="w-2/5 flex justify-center">
        <img src={mission} alt="Vision" className="w-[300px] h-auto mb-[-80px]" />
      </div>

      <div className="w-3/5 py-14">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <p className="mt-4">
          
            To design and provide advanced solutions that address industry-specific challenges keeping human and machine safety as top priority. Through innovation, integrity, and excellence, we aim to deliver exceptional value and build lasting partnerships with our customers.

        </p>
      </div>
      
    </div>
    </>
  )
}

export default VisionMission;
