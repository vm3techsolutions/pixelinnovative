import React, { useEffect, useState } from 'react';

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from JSON file
    fetch('/blogs.json') // Adjust path if the file is located elsewhere
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <>
      <div className="py-6">
        {/* Section Heading */}
        <div className="text-center">
          <h3 className="text-4xl mt-12 text-[#1A4861] font-bold relative inline-block">
            Latest
            <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#B2D190]"></span>
            <span className="text-[#B2D190]"> Blogs</span>
          </h3>
        </div>

        {/* Blog Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="border rounded-md shadow-md p-4 text-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h4 className="text-xl font-semibold text-[#1A4861] mb-2">{blog.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{blog.excerpt}</p>
              
              <a
                href={`/${blog.slug}`}
                className="text-[#fff] bg-[#B2D190] hover:bg-[#1A4861] hover:text-[#fff] px-4 py-2 text-sm font-semibold"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
