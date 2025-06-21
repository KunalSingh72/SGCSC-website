import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg", 
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => resetTimeout();
  }, [current]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slides container */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="bg-[rgba(0,0,0,0.4)] bg-opacity-50 text-white text-center p-8 sm:p-10 rounded-lg max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Empowering Futures through Technology
          </h2>
          <p className="mb-6 text-sm sm:text-base">
            Join SGCSC and learn practical IT skills to shape your career path.
          </p>
          <Link
            to="/courses"
            className="bg-green-600  font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
