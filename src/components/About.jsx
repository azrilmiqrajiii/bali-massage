export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-emerald-700">
          About Lestari Bali Spa
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          At{" "}
          <span className="font-semibold text-emerald-700">
            Lestari Bali Spa
          </span>
          , we bring the true essence of Balinese relaxation directly to you.
          our certified therapists ensure a rejuvenating and healing massage
          experience in the comfort of your own place.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
          Trusted in Bali
        </h3>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
          Over the years, <span className="font-medium">Lestari Bali Spa </span>
          has been trusted by clients across Bali – We specialize in Balinese
          Massage, Reflexology, Hot Stone Therapy, Aromatherapy, Thai Massage,
          and personalized spa treatments designed for your ultimate comfort.
        </p>

        <div className="text-gray-700 mt-10">
          <h4 className="text-xl font-semibold mb-2 text-emerald-700">
            📍 Our Location
          </h4>
          <p className="text-lg">
            Padangsambian Klod, Denpasar, Bali <br />
            <a
              href="https://maps.app.goo.gl/1wy9gA76sh4zxMhA7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-medium hover:underline"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
