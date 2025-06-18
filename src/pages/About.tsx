// import React from "react";

export default function AboutUs() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-800">
          SHREE GANAPATI COMPUTER AND STUDY CENTRE
        </h1>
        <p className="mt-4 text-lg text-green-700 max-w-2xl mx-auto">
          Building better futures with digital empowerment and practical learning.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">About SGCSC</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            SHREE GANPATI COMPUTER AND STUDY CENTRE was established in 2022 with a greater aim and vision of
            excellence in Information Technology and related areas. Its education empowers individuals to perform tasks more professionally.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            SGCSC is well convinced about this fact and, with the mission and objective of developing professional
            skills and expertise in IT and related fields, has taken a major step towards strengthening the individual’s
            capacity. SGCSC believes that individuals are the storehouse of revolution and multidimensional potential, and
            aims to emerge as a leader in the global arena.
          </p>
        </div>
        <img
          src="/hero1.jpg"
          alt="SGCSC Classroom"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </section>

      {/* Benefits Section */}
      <section className="bg-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-12">
            Benefits of Learning with SGCSC
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Career & Global Readiness",
                desc: "Successful completion of our certification programs prepares students for future career paths in any industry, worldwide.",
                icon: "🌍",
              },
              {
                title: "No Qualification Barrier",
                desc: "Anyone can enroll — regardless of age or educational background. SGCSC opens doors for everyone.",
                icon: "🚪",
              },
              {
                title: "Professionally Designed Courses",
                desc: "Designed by experts and technicians, our courses are relevant, scientific, and highly effective.",
                icon: "🧠",
              },
              {
                title: "Practical Skill Emphasis",
                desc: "Hands-on modules transform learners into skilled human resources, ready for private or public sectors.",
                icon: "🛠️",
              },
              {
                title: "Entrepreneurial Readiness",
                desc: "Our programs also encourage and prepare learners to start their own enterprises or self-employment.",
                icon: "🚀",
              },
              {
                title: "Employment Versatility",
                desc: "Our practical training ensures compatibility with the current work environment across industries.",
                icon: "💼",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-left transition hover:shadow-xl"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`SGCSC Gallery ${i + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
