export default function Gallery() {
  const images = [
    "https://images.pexels.com/photos/4407326/pexels-photo-4407326.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1556228453-515a9d1cf64d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/4496001/pexels-photo-4496001.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1608618211193-935e2b3dc215?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/4496080/pexels-photo-4496080.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">📸 Galeri Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={src}
                alt={`Massage ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
