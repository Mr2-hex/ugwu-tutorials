import React from "react";
import { CheckCircle } from "lucide-react"; // example icon

const features = [
  {
    title: "Expert Tutors",
    desc: "Learn from professionals with real-world experience.",
  },
  {
    title: "Flexible Learning",
    desc: "Study at your own pace, anytime, anywhere and at any given time.",
  },
  {
    title: "Interactive Classes",
    desc: "Engage with live sessions and practical projects that provide you with hands on experience.",
  },
  {
    title: "Affordable Plans",
    desc: "Get quality education that suits you without breaking the bank.",
  },
  {
    title: "Global Community",
    desc: "Connect with learners and mentors worldwide and gain experience.",
  },
  {
    title: "Career Support",
    desc: "Receive guidance to achieve your career goals and getting admission into your desired school.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="px-10 lg:px-40 py-20 bg-gray-50">
      {/* Divider with text */}
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-gray-400"></span>
        <p className="text-blue-700 font-semibold">Why Choose Us?</p>
        <span className="h-px w-16 bg-gray-400"></span>
      </div>

      {/* Subtitle */}
      <h2 className="text-center mt-6 text-2xl md:text-3xl font-bold font-funnel  text-gray-800">
        Educational Services Designed <p>To Suit Your Needs</p>
      </h2>

      {/* Features grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-100 p-6 rounded-2xl shadow-sm border-1 border-dotted border-blue-700 border-gray-200 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold font-funnel text-blue-700">
                {feature.title}
              </h3>
            </div>
            <p className=" text-blue-700 font-inter text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
