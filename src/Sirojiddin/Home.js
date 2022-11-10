import React from "react";
import Navbar from "../Companents/Navbar";
import Hero from "../Companents/Hero";
import Pricing from "../Companents/Pricing";
import FAQ from "../Companents/FAQ";
import Contact from "../Companents/Contact";
import Testominal from "../Companents/Testominal";
import Footer from "../Companents/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Testominal />
      <FAQ />
      <Contact  />
      <Footer />
    </>
  );
};

export default Home;
