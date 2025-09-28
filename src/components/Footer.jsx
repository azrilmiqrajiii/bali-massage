import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo3 from "../assets/logo3.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2c0a71] via-[#4318a3] to-[#2c0a71] text-white pt-16 pb-8 mt-20 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Logo + Deskripsi */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo3}
              alt="Lestari Bali Spa"
              className="h-16 w-auto object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-xs">
            Experience luxury & comfort in Bali with high-quality massage
            services — right at your villa or hotel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-300">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-300 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-300">
            Connect With Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/6285934358938"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-black transition shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-black transition shadow-md"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-black transition shadow-md"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 text-sm mt-12 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} Lestari Bali Spa. All Rights Reserved.
      </div>
    </footer>
  );
}
