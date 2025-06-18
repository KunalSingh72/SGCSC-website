import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Intro */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            SGCSC
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            SHREE GANAPATI COMPUTER AND STUDY CENTRE empowers students with practical IT skills for real-world success.
            Learn, grow, and transform your future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-300">Courses</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <span>
                <p>Raipur (Chiraiyakot) -Mau 
              <br/>
              State: Uttar Pradesh, india</p> 
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:+919889624850" className="hover:text-yellow-300">+91 9889624850</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:ajaymaurya@gmail.com" className="hover:text-yellow-300">ajaymaurya@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.facebook.com/smartSGCSC/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/SmartSGCSC" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@smartsgcsce" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaYoutube />
            </a>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SGCSC. All rights reserved.
      </div>
    </footer>
  );
}
