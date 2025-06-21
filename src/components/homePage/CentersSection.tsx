import { FaMapMarkerAlt, FaPhoneAlt, FaUniversity } from "react-icons/fa";

const centers = [
  {
    name: "SGCSC - Jaipur Center",
    address: "5th Floor, Tech Plaza, MI Road, Jaipur, Rajasthan",
    phone: "+91 9876543210",
  },
  {
    name: "SGCSC - Pune Center",
    address: "2nd Floor, Vision Towers, FC Road, Pune, Maharashtra",
    phone: "+91 9898989898",
  },
  {
    name: "SGCSC - Lucknow Center",
    address: "Beside Gomti Complex, Hazratganj, Lucknow, Uttar Pradesh",
    phone: "+91 9123456780",
  },
  {
    name: "SGCSC - Bhopal Center",
    address: "MP Nagar Zone 2, Bhopal, Madhya Pradesh",
    phone: "+91 9876567890",
  },
  {
    name: "SGCSC - Kolkata Center",
    address: "Salt Lake Sector V, Kolkata, West Bengal",
    phone: "+91 9833123456",
  },
];

export default function CentersSection() {
  return (
    <section className="bg-green-50 py-20 px-4" id="centers">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 text-center mb-12">
          Our Centers Across India
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {centers.map((center, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-green-100 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4 text-green-700">
                <FaUniversity className="text-xl" />
                <h3 className="text-lg font-semibold">{center.name}</h3>
              </div>
              <div className="flex items-start gap-3 text-gray-700 text-sm mb-2">
                <FaMapMarkerAlt className="mt-1 text-green-600" />
                <p>{center.address}</p>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <FaPhoneAlt className="text-green-600" />
                <a href={`tel:${center.phone}`} className="hover:text-green-800">{center.phone}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
