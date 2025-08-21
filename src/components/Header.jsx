import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center mt-4">
      <header className="bg-[#211f1f] rounded-3xl shadow-md flex items-center w-[90%] md:w-[60%] justify-between px-6 py-4 text-white relative">
        {/* Logo */}
        <h1 className="text-xl font-bold">Ugwu Academy</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
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
          <div className="absolute top-full left-0 mt-2 bg-[#211f1f] rounded-2xl shadow-md w-full p-6 text-white flex flex-col gap-4 md:hidden z-50">
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
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
