import React from 'react'
import Banner from './Banner';
import QuoteSection from './QuoteSection';
import CoreValue from './CoreValue';
import ProductsSection from './ProductsSection';
import Team from './Team';
import LatestBlog from './LatestBlog';
import Newsletter from './Newsletter';

const Home_Main = () => {
  return (
    <>
      <Banner/>
      <QuoteSection/>
      <CoreValue/>
      <ProductsSection/>
      <Team/>
      <LatestBlog/>
      <Newsletter/>
    </>
  )
}

export default Home_Main;
