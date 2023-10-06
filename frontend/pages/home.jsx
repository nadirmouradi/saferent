import Navbar from "../components/Homepage/Navbar";
import Hero from "../components/Homepage/Hero";
import Footer from "../components/Homepage/Footer";
import Values from "../components/Homepage/Values";
import Loginpage from "../components/Login/Loginpage";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Values />
      <Footer />
      {/* <Loginpage /> */}
    </div>
  );
};

export default Homepage;
