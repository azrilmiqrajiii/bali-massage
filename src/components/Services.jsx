import massagebali from "../assets/massagebali.webp";
import reflexology from "../assets/Reflexology.jpg";
import scrub from "../assets/scrub.webp";
import hotstone from "../assets/hotstone.jpeg";
import aromateraphy from "../assets/aromateraphy.webp";
import deep from "../assets/deep.jpg";
import thaiMassage from "../assets/thaiMasage.jpg";

const services = [
  {
    name: "Balinese Massage",
    image: massagebali,
    prices: [
      { duration: "60 minute", price: "250k" },
      { duration: "90 minute", price: "350k" },
      { duration: "120 minute", price: "450k" },
    ],
  },
  {
    name: "Reflexology",
    image: reflexology,
    prices: [
      { duration: "60 minute", price: "200k" },
      { duration: "90 minute", price: "250k" },
      { duration: "120 minute", price: "350k" },
    ],
  },
  {
    name: "Facial Acupressure",
    image:
      "https://images.pexels.com/photos/6628820/pexels-photo-6628820.jpeg?auto=compress&cs=tinysrgb&w=800",
    prices: [
      { duration: "60 minute", price: "300k" },
      { duration: "90 minute", price: "400k" },
      { duration: "120 minute", price: "500k" },
    ],
  },
  {
    name: "Massage & Scrub",
    image: scrub,
    prices: [
      { duration: "60 minute", price: "300k" },
      { duration: "90 minute", price: "400k" },
      { duration: "120 minute", price: "500k" },
    ],
  },
  {
    name: "Hot Stone Massage",
    image: hotstone,
    prices: [
      { duration: "60 minute", price: "300k" },
      { duration: "90 minute", price: "400k" },
      { duration: "120 minute", price: "500k" },
    ],
  },
  {
    name: "Aromatherapy",
    image: aromateraphy,
    prices: [
      { duration: "60 minute", price: "300k" },
      { duration: "90 minute", price: "400k" },
      { duration: "120 minute", price: "500k" },
    ],
  },
  {
    name: "Deep Tissue",
    image: deep,
    prices: [
      { duration: "60 minute", price: "300k" },
      { duration: "90 minute", price: "400k" },
      { duration: "120 minute", price: "500k" },
    ],
  },
  {
    name: "Thai Massage",
    image: thaiMassage,
    prices: [
      { duration: "60 minute", price: "350k" },
      { duration: "90 minute", price: "450k" },
      { duration: "120 minute", price: "550k" },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-[#2c0a71] via-[#4318a3] to-yellow-400 bg-clip-text text-transparent">
          Our Premium Services
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white/80 backdrop-blur-md border border-yellow-400/20 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
          >
            <div className="h-48 overflow-hidden rounded-2xl">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-500 rounded-2xl"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#2c0a71]">
                {s.name}
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {s.prices.map((p, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{p.duration}</span>
                    <span className="font-semibold text-yellow-600">
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/628174884328?text=Halo,%20saya%20mau%20booking%20${encodeURIComponent(
                  s.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-[#2c0a71] to-[#4318a3] hover:from-[#4318a3] hover:to-[#2c0a71] text-white px-5 py-3 rounded-full shadow-xl transition transform hover:scale-105 border border-yellow-400/30"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
