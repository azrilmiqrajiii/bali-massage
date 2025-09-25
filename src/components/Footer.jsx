import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo3 from "../assets/logo3.png"; // ✅ import logo

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Logo + Deskripsi */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo3} // ✅ pakai import
              alt="Lestari Bali Spa"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-xs">
            The best relaxation in Bali with professional, comfortable, and
            high-quality massage services — delivered right to your villa or
            hotel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials + WA Button */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-5">
            <a
              href="https://wa.me/6285934358938"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-emerald-600 transition"
              aria-label="chat whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-emerald-600 transition"
              aria-label="instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-emerald-600 transition"
              aria-label="facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <a
            href="https://wa.me/6285934358938"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition"
          >
            <MessageCircle className="w-5 h-5 text-emerald-700" />
            Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-200 text-sm mt-12 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} Lestari Bali Spa. All Rights Reserved.
      </div>
    </footer>
  );
}
