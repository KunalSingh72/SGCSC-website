export default function CertificateVerification() {
  return (
    <section className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Certificate Verification</h2>
      <form className="space-y-6 bg-white p-6 rounded-xl shadow border border-green-100">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Enrollment No.</label>
          <input
            type="text"
            placeholder="Enter Enrollment Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Verify
        </button>
      </form>
    </section>
  );
}
