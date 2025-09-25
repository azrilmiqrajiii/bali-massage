import { ShieldCheck, Heart, Clock, Star } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-emerald-600" />,
      title: "Skilled & Certified Therapists",
      desc: "Our highly trained professionals deliver authentic Balinese techniques designed to relax, heal, and restore your energy.",
    },
    {
      icon: <Heart className="w-12 h-12 text-emerald-600" />,
      title: "Uncompromised Quality",
      desc: "From hygiene to comfort, every detail is carefully taken care of - because your well - being is our top priority.",
    },
    {
      icon: <Clock className="w-12 h-12 text-emerald-600" />,
      title: "Convenient & Punctual",
      desc: "Enjoy a spa experience anytime, anywher e - whether at your home, villa, or hotel, right on your schedule.",
    },
    {
      icon: <Star className="w-12 h-12 text-emerald-600" />,
      title: "Luxury Balinese Touch",
      desc: "Indulge in a premium spa journey that combines luxury, tradition, and the soothing spirit of Bali.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why Choose <span className="text-emerald-600">Lestari Bali Spa?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Not just a massage, but a rejuvenating escape. We bring the luxury of
          a Balinese spa directly to you - where relaxation, comfort, and
          harmony meet.
        </p>

        <div className="cursor-pointer grid md:grid-cols-4 gap-10">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
            >
              <div className="flex justify-center mb-6">{r.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-emerald-700">
                {r.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
