import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation(); // Get the current route/location

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the top offset dynamically
  const headerOffset = scrollPosition > 30 ? 0 : 30 - scrollPosition;

  // Conditionally set header styles based on the current route
  const headerStyle = location.pathname === "/" 
    ? { top: `${headerOffset}px`, transition: "top 0.3s ease" } 
    : { top: "0", position: "fixed", transition: "top 0.3s ease" };

  return (
    <nav className="header bg-primary" style={headerStyle}>
      <img src={logo} alt="Logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        {/* <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/career">CAREER</Link>
        </li> */}
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
