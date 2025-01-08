import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 text-[15px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-28">
        {/* First Column: Logo, Address, Contact */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="mb-4 w-28"
          />
          {/* <h4 className="font-bold my-2">About Pixel</h4> */}
          <p className="mb-2">Address: S.No.126/2A/1A/1 Flat No.401, Jivan Chaya HSG SOC.PL 21, Kothrud, Pune City, Pune- 411038, Maharashtra</p>
          <p className="mb-2">Phone: <a href="+919730305633">+91 9730305633</a></p>
          <p className="mb-4">Email: <a href="sales@pixelinnovative.net">sales@pixelinnovative.net</a></p>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-[#1A4861]">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#1A4861]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#1A4861]">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-[#1A4861]">
              <i className="fab fa-linkedin"></i>
            </a>
            
          </div>
        </div>

        {/* Second Column: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#1A4861]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#1A4861]">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#1A4861]">
                Products
              </a>
            </li>
            {/* <li>
              <a href="/services" className="hover:text-[#1A4861]">
                Services
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#1A4861]">
                Career
              </a>
            </li>  */}
            <li>
              <a href="/faq" className="hover:text-[#1A4861]">
                FAQ
              </a>
            </li>       
            <li>
              <a href="/contact" className="hover:text-[#1A4861]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Portfolio */}
        <div>
        <h4 className="text-lg font-semibold mb-4">Portfolio</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <a href="/projects/1">
              <img
                src="https://via.placeholder.com/150"
                alt="Project 1"
                className="w-full h-22 object-cover rounded-md"
              />
            </a>
          </div>
          <div>
            <a href="/projects/2">
              <img
                src="https://via.placeholder.com/150"
                alt="Project 2"
                className="w-full h-22 object-cover rounded-md"
              />
            </a>
          </div>
          <div>
            <a href="/projects/3">
              <img
                src="https://via.placeholder.com/150"
                alt="Project 3"
                className="w-full h-22 object-cover rounded-md"
              />
            </a>
          </div>
          <div>
            <a href="/projects/4">
              <img
                src="https://via.placeholder.com/150"
                alt="Project 4"
                className="w-full h-22 object-cover rounded-md"
              />
            </a>
          </div>
          <div>
            <a href="/projects/5">
              <img
                src="https://via.placeholder.com/150"
                alt="Project 5"
                className="w-full h-22 object-cover rounded-md"
              />
            </a>
          </div>
          <div>
            <a href="/projects/6">
              <img
                src="https://via.placeholder.com/150"
                alt="Project 6"
                className="w-full h-22 object-cover rounded-md"
              />
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#81a3e8] mt-8 py-4 text-center">
        <p className="text-sm">©2025 Pixel Innovative. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
