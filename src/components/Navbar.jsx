import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-3 shadow-md bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-100">
      <a href="#" className="flex items-center space-x-2">
        <img
          src={logo} 
          alt="Lestari Bali Spa"
          className="h-16 md:h-20 w-auto"
        />
      </a>

      <div className="space-x-8 hidden md:flex text-gray-700 font-medium">
        <a href="#about" className="hover:text-emerald-600 transition">
          About
        </a>
        <a href="#services" className="hover:text-emerald-600 transition">
          Services
        </a>
        <a href="#gallery" className="hover:text-emerald-600 transition">
          Gallery
        </a>
        <a href="#contact" className="hover:text-emerald-600 transition">
          Contact
        </a>
      </div>

      <a
        href="https://wa.me/6285934358938?text=Halo,%20saya%20mau%20booking%20massage"
        className="hidden md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full shadow-md transition transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>

      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

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
            className="hover:text-emerald-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-emerald-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#gallery"
            className="hover:text-emerald-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://wa.me/6285934358938?text=Halo,%20saya%20mau%20booking%20massage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full shadow-md transition transform hover:scale-105 text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
