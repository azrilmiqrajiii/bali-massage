import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-3 shadow-lg bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-200">
      {/* Logo */}
      <a href="#" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Lestari Bali Spa"
          className="h-16 md:h-20 w-auto drop-shadow-lg"
        />
      </a>

      {/* Menu Links */}
      <div className="space-x-8 hidden md:flex text-gray-700 font-medium">
        <a href="#about" className="hover:text-[#2c0a71] transition">
          About
        </a>
        <a href="#services" className="hover:text-[#2c0a71] transition">
          Services
        </a>
        <a href="#gallery" className="hover:text-[#2c0a71] transition">
          Gallery
        </a>
        <a href="#contact" className="hover:text-[#2c0a71] transition">
          Contact
        </a>
      </div>

      {/* Book Now button */}
      <div className="hidden md:inline-block">
        <a
          href="https://wa.me/6285934358938?text=Halo,%20saya%20mau%20booking%20massage"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#2c0a71] via-[#4318a3] to-[#6d28d9] hover:from-[#4318a3] hover:to-[#2c0a71] text-white px-6 py-3 rounded-full shadow-xl transition transform hover:scale-105 border border-[#6d28d9]/40 font-medium"
        >
          Book Now
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="flex flex-col space-y-4 py-6 px-8 text-gray-700 font-medium">
          <a
            href="#about"
            className="hover:text-[#2c0a71] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-[#2c0a71] transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#gallery"
            className="hover:text-[#2c0a71] transition"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-[#2c0a71] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* Mobile Book Now button */}
          <a
            href="https://wa.me/6285934358938?text=Halo,%20saya%20mau%20booking%20massage"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gradient-to-r from-[#2c0a71] via-[#4318a3] to-[#6d28d9] hover:from-[#4318a3] hover:to-[#2c0a71] text-white px-5 py-3 rounded-full shadow-lg transition transform hover:scale-105 border border-[#6d28d9]/40"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
