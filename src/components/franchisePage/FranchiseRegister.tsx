import { useState } from "react";
import { indianStatesAndDistricts } from "../../data/indianstates";
import FileUpload from "./FileUpload";
export default function FranchiseRegister() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value);
  };

  const districts =
    indianStatesAndDistricts.find((s) => s.state === selectedState)
      ?.districts || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-12">
        Franchise Registration
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Owner & Institute Details */}
        {[
          { label: "Institute Owner Name", type: "text" },
          { label: "Institute Name", type: "text" },
          { label: "Date of Birth", type: "date" },
        ].map(({ label, type }) => (
          <div key={label}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {label}
            </label>
            <input type={type} className="input" required />
          </div>
        ))}

        {/* Uploads */}
        {[
          { label: "Institute Photo (100KB - 300KB)" },
          { label: "Aadhar Front" },
          { label: "Aadhar Back" },
          { label: "Center Owner Sign (0KB - 100KB)" },
          { label: "Franchise Owner Image (100KB - 300KB)" },
        ].map(({ label }) => (
          <div key={label}>
            <FileUpload
  label={label}
  accept="image/*"
  minSizeKB={100}
  maxSizeKB={300}
/>
          </div>
        ))}

        {/* Address */}
        <div className="col-span-full">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Institute Full Address
          </label>
          <textarea rows={3} className="input resize-none" required />
        </div>

        {/* State & District */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Select State
          </label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="input"
            required
          >
            <option value="">-- Select State --</option>
            {indianStatesAndDistricts.map(({ state }) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Select District
          </label>
          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="input"
            required
            disabled={!selectedState}
          >
            <option value="">-- Select District --</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Stats */}
        {[
          { label: "Number of Teachers", type: "number" },
          { label: "Number of Classrooms", type: "number" },
          { label: "WhatsApp Number", type: "tel" },
          { label: "Contact Number", type: "tel" },
          { label: "Email ID", type: "email" },
          { label: "Total Computers", type: "number" },
          { label: "Qualification of Institute Head", type: "text" },
        ].map(({ label, type }) => (
          <div key={label}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {label}
            </label>
            <input type={type} className="input" required />
          </div>
        ))}

        {/* Radio Sections */}
        {[
          { label: "Staff Room", name: "staffRoom" },
          { label: "Toilet", name: "toilet" },
          { label: "Water Supply", name: "waterSupply" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <div className="flex gap-6 pl-1 pt-1 text-sm">
              <label className="flex items-center gap-1">
                <input type="radio" name={name} value="yes" required />
                Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name={name} value="no" required />
                No
              </label>
            </div>
          </div>
        ))}

        {/* Credentials */}
        {[
          { label: "Username", type: "text" },
          { label: "Password", type: "password" },
        ].map(({ label, type }) => (
          <div key={label}>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input type={type} className="input" required />
          </div>
        ))}

        {/* Captcha */}
        <div className="md:col-span-2 lg:col-span-1">
          <label className="block text-sm font-semibold mb-1">
            Captcha Code
          </label>
          <div className="flex items-center gap-3">
            <img
              src="/captcha.png"
              alt="captcha"
              className="h-10 border rounded shadow"
            />
            <input type="text" className="input flex-1" required />
          </div>
        </div>

        {/* Submit */}
        <div className="col-span-full mt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
