import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#2c0a71] via-[#4318a3] to-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contact us for reservations or inquiries. Our team is ready to
            assist you with friendly, professional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-yellow-400/20 hover:shadow-2xl transition">
              <MapPin className="text-yellow-400 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[#2c0a71] mb-1">
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Padangsambian Klod, Denpasar, Bali
                  <br />
                  <a
                    href="https://maps.app.goo.gl/1wy9gA76sh4zxMhA7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 font-medium hover:underline"
                  >
                    📍 View on Google Maps
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-yellow-400/20 hover:shadow-2xl transition">
              <Phone className="text-yellow-400 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[#2c0a71] mb-1">
                  Phone
                </h3>
                <p className="text-gray-600">+62 817-488-4328</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-yellow-400/20 hover:shadow-2xl transition">
              <MessageCircle className="text-yellow-400 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[#2c0a71] mb-3">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/628174884328?text=Halo,%20saya%20mau%20booking%20massage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#2c0a71] to-[#4318a3] hover:from-[#4318a3] hover:to-[#2c0a71] text-white px-6 py-3 rounded-full shadow-xl transition transform hover:scale-105 border border-yellow-400/30"
                >
                  💬 Chat via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/20">
            <iframe
              src="https://maps.google.com/maps?q=-8.6835383,115.179601&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lestari Bali Spa Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
