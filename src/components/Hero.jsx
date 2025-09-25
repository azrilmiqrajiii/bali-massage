export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/02/25/11/59/massage-budapest-2097595_1280.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-wide">
          Relax • Refresh • Renew <br />
          with <span className="text-emerald-300">Lestari Bali Spa</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Professional Balinese Massage Services Wherever You Are in Bali.
          Experience true relaxation in your villa, hotel, or private residence
          with our certified therapists.
        </p>

        {/* <a
          href="https://wa.me/6285934358938?text=Halo,%20saya%20mau%20booking%20massage"
          className="inline-block mt-8 bg-emerald-500 hover:bg-emerald-600 px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌿 Book Your Session
        </a> */}
      </div>
    </section>
  );
}
