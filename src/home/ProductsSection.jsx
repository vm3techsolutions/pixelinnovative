import React, { useEffect, useState } from 'react';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products data from the JSON file
    fetch('/products.json') // Path relative to the public folder
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Products:', data); // Debugging line
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="py-6">
      {/* Section Heading */}
      <div className="text-center">
        <h3 className="text-4xl mt-12 text-primary font-bold relative inline-block">
          Our
          <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-secondary"></span>
          <span className="text-secondary"> Products</span>
        </h3>
        <p className="text-center my-8 w-[60%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium debitis accusantium, placeat ea delectus rerum, asperiores eius minus odio quaerat omnis esse repudiandae voluptatum, ipsam veniam architecto ducimus sequi!
        </p>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-24">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="w-[300px] mx-auto shadow-md ">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover " />
              <h4 className="text-xl text-center bg-secondary font-semibold text-primary py-4">{product.name}</h4>
              
              {/* <p className="text-sm text-gray-500">{product.content}</p>
              <a href={`/${product.slug}`} className="text-[#B2D190] hover:text-[#1A4861]">Read more</a> */}
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
