import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-green-50 shadow-md">
      {/* Top Bar with Logo & Title */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="vite.svg" alt="Logo" className="w-12 h-12 drop-shadow-sm" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-700 tracking-tight leading-tight">
            Shree Ganpati Computer & Study Centre
          </h1>
        </div>
        {/* Optional CTA button */}
        <Link
          to="/contact"
          className="hidden sm:inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-all"
        >
          Enroll Now
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex justify-between items-center py-3 text-sm sm:text-base font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-green-600 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-600 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-green-600 transition duration-200">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-green-600 transition duration-200">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600 transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
