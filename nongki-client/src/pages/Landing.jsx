import React from "react";
import Navbar from '../Components/Landing/Navbar';
import Hero from '../Components/Landing/Hero';
import About from '../Components/Landing/About';
import WhyUs from '../Components/Landing/WhyUs';
import Product from '../Components/Landing/Product';
import Location from '../Components/Landing/Location';
import Testi from '../Components/Landing/Testi';
import FAQ from "../Components/Landing/Faq";
import Footer from "../Components/Landing/Footer";

const Landing = () => (
  <div>
    <Navbar />
    <main>
      <Hero />
      <About />
      <WhyUs />
      <Product />
      <Location />
      <Testi />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default Landing;
