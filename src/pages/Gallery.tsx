const galleryImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero2.jpg",
  "/hero2.jpg",
  "/hero2.jpg",
];

export default function GalleryPage() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
          SGCSC Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={src}
                alt={`SGCSC Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
