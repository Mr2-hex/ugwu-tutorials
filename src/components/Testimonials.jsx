import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kosarachi",
      school: "Federal College, Enugu.",
      feedback:
        "This platform made learning fun and engaging! I love the interactive features.",
      color: "bg-yellow-400",
    },
    {
      name: "Jaden Ubasinachi",
      school: "UNSSEC, Enugu",
      feedback:
        "As a student, this really helped me stay motivated and consistent.",
      color: "bg-red-500",
    },
    {
      name: "Amaka Christopher",
      school: "Command Sec. Sch, Enugu.",
      feedback: "Clean design, easy to use, and actually fun to study with!",
      color: "bg-green-500",
    },
    {
      name: "Tunde Bello",
      school: "Federal College, Enugu.",
      feedback: "One of the best online learning experiences I've had so far.",
      color: "bg-neutral-900 text-white", // charcoal black
    },
  ];

  return (
    <div className="px-40 py-20 max-[780px]:px-10 bg-gray-50">
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-12 gap-6 ">
        {/* Header and text together */}
        <div>
          <h2 className="text-left font-funnel font-bold text-4xl leading-snug max-[780px]:text-3xl">
            Boost your learning <br /> & achieve more
          </h2>
          {/* On mobile, show this below the heading */}
          <p className="mt-4 text-gray-600 md:hidden">
            We make studying easier, rewarding, and fun. Discover how students
            just like you stay motivated and keep reaching new goals every day.
          </p>
        </div>

        {/* On desktop, keep this on the right */}
        <p className="max-w-md text-gray-600 hidden md:block">
          We make studying easier, rewarding, and fun. Discover how students
          just like you stay motivated and keep reaching new goals every day.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-col md:flex-row md:justify-start gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`${t.color} rounded-2xl shadow-lg p-6 w-full md:w-64 h-80 flex flex-col justify-between`}
          >
            <p className="text-lg font-medium font-inter">"{t.feedback}"</p>
            <span className="text-sm font-bold mt-4">
              {t.name}
              <p className="font-light font-inter">{t.school}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
