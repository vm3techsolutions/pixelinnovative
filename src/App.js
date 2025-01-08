import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import Home_Main from "./home/Home_Main";
import Footer from "./footer/Footer";
import PageTitle from './pageTitle/PageTitle';
import AboutMain from './about/AboutMain';
import ContactMain from "./contact/ContactMain";
import FAQ from './faq/FAQ';

const App = () => {
  return (
    <Router>
      <Header />
      <PageTitle/>
      <Routes>
        <Route path="/" element={<Home_Main/>} />
        <Route path="/about" element={<AboutMain/>} />
        <Route path="/products" element={<h1>Product Page</h1>} />
        {/* <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/career" element={<h1>career Page</h1>} /> */}
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<ContactMain/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
