import React from 'react'
import banner from '../assets/banner.jpeg'
import "./Home.css"

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
    </>
  )
}

export default Banner;
