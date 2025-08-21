import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Goals from "./components/Goals";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Testimonials />
      <Goals />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default App;
