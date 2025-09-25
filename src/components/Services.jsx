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
    name: "Facial acupressure massage",
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
    name: "Aromaterapi",
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
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-emerald-50 to-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
        <span className="text-emerald-600">Our Services</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform cursor-pointer"
          >
            <div className="h-48 overflow-hidden rounded-t-2xl">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700 text-center">
                {s.name}
              </h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                {s.prices.map((p, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{p.duration}</span>
                    <span className="font-medium">{p.price}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/6285934358938?text=Halo,%20saya%20mau%20booking%20${encodeURIComponent(
                  s.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full shadow-md transition transform hover:scale-105"
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
