import React from "react";
import { CheckCircle } from "lucide-react"; // example icon

const features = [
  {
    title: "Expert Tutors",
    desc: "Learn from professionals with real-world experience.",
    color: "bg-yellow-400 text-gray-900",
  },
  {
    title: "Flexible Learning",
    desc: "Study at your own pace, anytime, anywhere and at any given time.",
    color: "bg-red-500 text-white",
  },
  {
    title: "Interactive Classes",
    desc: "Engage with live sessions and practical projects that provide you with hands on experience.",
    color: "bg-blue-900 text-white",
  },
  {
    title: "Affordable Plans",
    desc: "Get quality education that suits you without breaking the bank.",
    color: "bg-green-500 text-white",
  },
  {
    title: "Global Community",
    desc: "Connect with learners and mentors worldwide and gain experience.",
    color: "bg-neutral-900 text-white", // charcoal black
  },
  {
    title: "Career Support",
    desc: "Receive guidance to achieve your career goals and getting admission into your desired school.",
    color: "bg-pink-500 text-white",
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
      <h2 className="text-center mt-6 text-2xl md:text-3xl font-bold font-funnel text-gray-800">
        Educational Services Designed <p>To Suit Your Needs</p>
      </h2>

      {/* Features grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between 
              transform transition duration-300 ease-in-out hover:scale-105 hover:-rotate-1 
              hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]`}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold font-funnel">{feature.title}</h3>
              <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                <CheckCircle size={20} />
              </div>
            </div>
            <p className="mt-3 font-inter text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
