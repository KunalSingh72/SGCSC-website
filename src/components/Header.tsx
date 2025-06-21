import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentMenuOpen, setStudentMenuOpen] = useState(false);
  const [franchiseMenuOpen, setFranchiseMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setStudentMenuOpen(false);
    setFranchiseMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-green-50 shadow-md">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" onClick={closeMobileMenu} className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 drop-shadow-sm" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-700 tracking-tight leading-tight">
            Shree Ganpati Computer & Study Centre
          </h1>
        </Link>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            to="/student/result-verification"
            className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Result
          </Link>
          <Link
            to="/student/login"
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-green-700"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop Menu */}
          <ul className="hidden sm:flex justify-between items-center py-3 text-sm sm:text-base font-medium text-gray-700 relative">
            <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600 transition">About</Link></li>
            <li><Link to="/courses" className="hover:text-green-600 transition">Courses</Link></li>

            {/* Student Dropdown */}
            <li className="relative group">
              <div className="flex items-center space-x-1 hover:text-green-600 transition cursor-pointer">
                <span>Student</span>
                <ChevronDown size={16} />
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <li><Link to="/student/enrollment-verification" className="block px-4 py-2 hover:bg-green-100">Enrollment Verification</Link></li>
                <li><Link to="/student/result-verification" className="block px-4 py-2 hover:bg-green-100">Result Verification</Link></li>
                <li><Link to="/student/certificate-verification" className="block px-4 py-2 hover:bg-green-100">Certificate Verification</Link></li>
                <li><Link to="/student/admit-card" className="block px-4 py-2 hover:bg-green-100">Admit Card</Link></li>
                <li><Link to="/student/login" className="block px-4 py-2 hover:bg-green-100">Student Login</Link></li>
              </ul>
            </li>

            {/* Franchise Dropdown */}
            <li className="relative group">
              <div className="flex items-center space-x-1 hover:text-green-600 transition cursor-pointer">
                <span>Franchise</span>
                <ChevronDown size={16} />
              </div>
              <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <li><Link to="/franchise/register" className="block px-4 py-2 hover:bg-green-100">Franchise Registration Online</Link></li>
                <li><Link to="/franchise/details" className="block px-4 py-2 hover:bg-green-100">Franchise Details</Link></li>
                <li><Link to="/franchise/verification" className="block px-4 py-2 hover:bg-green-100">Franchise Verification</Link></li>
                <li><Link to="/franchise/centers" className="block px-4 py-2 hover:bg-green-100">Study Center List</Link></li>
                <li><Link to="/franchise/login" className="block px-4 py-2 hover:bg-green-100">Center Login</Link></li>
              </ul>
            </li>

            <li><Link to="/gallery" className="hover:text-green-600 transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-green-600 transition">Contact</Link></li>
          </ul>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="flex flex-col sm:hidden gap-1 py-4 text-base font-medium text-gray-700">
              <li><Link to="/" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Home</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">About</Link></li>
              <li><Link to="/courses" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Courses</Link></li>

              {/* Student Dropdown */}
              <li>
                <button
                  onClick={() => {
                    setStudentMenuOpen(!studentMenuOpen);
                    setFranchiseMenuOpen(false);
                  }}
                  className="w-full flex justify-between items-center px-4 py-2 hover:bg-green-100"
                >
                  <span>Student</span>
                  <ChevronDown
                    className={`transform transition-transform ${studentMenuOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {studentMenuOpen && (
                  <ul className="bg-green-50 border-l border-green-300 ml-4">
                    <li><Link to="/student/enrollment-verification" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Enrollment Verification</Link></li>
                    <li><Link to="/student/result-verification" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Result Verification</Link></li>
                    <li><Link to="/student/certificate-verification" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Certificate Verification</Link></li>
                    <li><Link to="/student/admit-card" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Admit Card</Link></li>
                    <li><Link to="/student/login" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Student Login</Link></li>
                  </ul>
                )}
              </li>

              {/* Franchise Dropdown */}
              <li>
                <button
                  onClick={() => {
                    setFranchiseMenuOpen(!franchiseMenuOpen);
                    setStudentMenuOpen(false);
                  }}
                  className="w-full flex justify-between items-center px-4 py-2 hover:bg-green-100"
                >
                  <span>Franchise</span>
                  <ChevronDown
                    className={`transform transition-transform ${franchiseMenuOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {franchiseMenuOpen && (
                  <ul className="bg-green-50 border-l border-green-300 ml-4">
                    <li><Link to="/franchise/register" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Franchise Registration Online</Link></li>
                    <li><Link to="/franchise/details" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Franchise Details</Link></li>
                    <li><Link to="/franchise/verification" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Franchise Verification</Link></li>
                    <li><Link to="/franchise/centers" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Study Center List</Link></li>
                    <li><Link to="/franchise/login" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Center Login</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/gallery" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Gallery</Link></li>
              <li><Link to="/contact" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-green-100">Contact</Link></li>

              <li className="px-4 pt-2">
                <Link
                  to="/student/result-verification"
                  onClick={closeMobileMenu}
                  className="block text-center bg-white text-green-600 border border-green-600 py-2 rounded-lg shadow hover:bg-gray-100 transition mb-2"
                >
                  Result
                </Link>
                <Link
                  to="/student/login"
                  onClick={closeMobileMenu}
                  className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
