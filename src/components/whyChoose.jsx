import { ShieldCheck, Heart, Clock, Star } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-yellow-300 drop-shadow-lg" />,
      title: "Skilled & Certified Therapists",
      desc: "Highly trained professionals delivering authentic Balinese techniques designed to relax, heal, and restore your energy.",
    },
    {
      icon: <Heart className="w-12 h-12 text-yellow-300 drop-shadow-lg" />,
      title: "Uncompromised Quality",
      desc: "Every detail is taken care of — from hygiene to comfort — because your well-being is our top priority.",
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-300 drop-shadow-lg" />,
      title: "Convenient & Punctual",
      desc: "Spa experience anytime, anywhere — villa, hotel, or home, right on your schedule.",
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-300 drop-shadow-lg" />,
      title: "Luxury Balinese Touch",
      desc: "Indulge in a premium spa journey that blends tradition, luxury, and the soothing spirit of Bali.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-10">
          <span className="bg-gradient-to-r from-[#2c0a71] via-[#4318a3] to-yellow-400 bg-clip-text text-transparent">
            Why Choose Lestari Bali Spa?
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Not just a massage, but a rejuvenating escape. We bring the luxury of
          a Balinese spa directly to you — where relaxation, comfort, and
          harmony meet.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-yellow-400/20 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
            >
              <div className="flex justify-center mb-6">{r.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-[#2c0a71]">
                {r.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
