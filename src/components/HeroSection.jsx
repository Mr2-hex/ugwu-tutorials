import React from "react";
import HeroImg from "../assets/images/students.png";
const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center py-20">
        {/* Hero Text */}
        <h1 className="font-funnel text-5xl text-center font-bold leading-tight text-gray-900">
          Not just tutorials—your study{" "}
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-4xl ">
            community.{" "}
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 font-inter">
          Great minds deserve a system that makes learning simple and fun.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#get-started"
            className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
          >
            Learn More
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-10 flex justify-center">
          <img
            src={HeroImg} // replace with your SVG or generated image
            alt="Students learning"
            className="w-full max-w-lg drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
