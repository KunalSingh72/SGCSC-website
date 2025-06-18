export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Map Section */}
      <section className="w-full h-[400px]">
        <iframe
          title="SGCSC Main Center - Delhi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.4645335068126!2d83.37099440000001!3d25.854184200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991ed5326b658b9%3A0x91a81a220731cd40!2sSGCSc%20Computer%20INSTITUTE!5e0!3m2!1sen!2sin!4v1704260842759!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-2">Main Office</h3>
            <p>Raipur (Chiraiyakot) -Mau 
              <br/>
              State: Uttar Pradesh, india</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-2">Contact Number</h3>
            <p>+91 9889624850</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-2">Email</h3>
            <p>ajaymaurya@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Have a Question?</h2>
          <form
            action="https://formsubmit.co/ajayamaurya@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
