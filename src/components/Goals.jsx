import React from "react";
import Img from "../assets/images/goals-girl-img.png";

const Goals = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full p-8 rounded-3xl shadow-lg bg-gray-50">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="font-funnel font-bold text-3xl mb-4">
            Let's Know About Our <br />
            <span className="text-blue-700">Main Goal</span>
          </h2>
          <p className="font-inter text-gray-600 mb-6 leading-relaxed">
            Our goal is to make studying easier, more engaging, and rewarding.
            We believe that learning should inspire curiosity, consistency, and
            growth — while also being fun.
          </p>

          {/* Bullet Point Grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              "Boost confidence in learning",
              "Encourage daily study habits",
              "Make studying more rewarding",
              "Support collaborative learning",
              "Provide modern learning tools",
              "Turn challenges into achievements",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 font-inter text-gray-700"
              >
                <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Img}
            alt="Goals illustration"
            className="max-w-xs w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;
