import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }} // fade-down entry
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center fixed top-0 left-0 w-full z-50 mt-6"
    >
      <header
        className={`rounded-4xl flex items-center w-[90%] md:w-[60%] justify-between px-6 py-4 text-white relative transition-all duration-300 ${
          scrolled
            ? "bg-[#211f1f]/70 backdrop-blur-lg shadow-lg"
            : "bg-[#211f1f]"
        }`}
      >
        {/* Logo */}
        <h1 className="text-xl font-bold font-funnel">Ugwu Academy</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-inter">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Testimonials</li>
            <li className="hover:text-gray-300 cursor-pointer">Classes</li>
            <li className="hover:text-gray-300 cursor-pointer">Careers</li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-white text-[#333333] font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
          Sign Up For Free
        </button>

        {/* Mobile Burger Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 bg-[#211f1f]/90 backdrop-blur-md rounded-2xl shadow-md w-full p-6 text-white flex flex-col gap-4 md:hidden z-50"
          >
            <ul className="flex flex-col gap-4">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gray-300 cursor-pointer">Classes</li>
              <li className="hover:text-gray-300 cursor-pointer">Careers</li>
            </ul>
            <button className="bg-white text-[#333333] font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition mt-4">
              Sign Up For Free
            </button>
          </motion.div>
        )}
      </header>
    </motion.div>
  );
};

export default Header;
