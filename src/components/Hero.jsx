export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/02/25/11/59/massage-budapest-2097595_1280.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#2c0a71]/70 to-black/90" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-widest drop-shadow-2xl">
          Relax • Refresh • Renew <br />
          <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-400 bg-clip-text text-transparent">
            Lestari Bali Spa
          </span>
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Experience the{" "}
          <span className="text-yellow-300 font-semibold">
            luxury of Balinese Spa
          </span>{" "}
          with professional therapists — right at your villa, hotel, or private
          residence.
        </p>
      </div>
    </section>
  );
}
