import { Link } from "react-router-dom";

type Course = {
  title: string;
  duration: string;
  image: string;
};

const longTermCourses: Course[] = [
  { title: "Diploma in Computer Applications (DCA)", duration: "1 Year", image: "/courses/dca.jpg" },
  { title: "Advanced Diploma in Computer Programming", duration: "1 Year", image: "/courses/adcp.jpg" },
];

const shortTermCourses: Course[] = [
  { title: "Basic Computer Training", duration: "6 Months", image: "/courses/basic.jpg" },
  { title: "Office Automation", duration: "6 Months", image: "/courses/office.jpg" },
];

const certificateCourses: Course[] = [
  { title: "Tally & GST", duration: "3 Months", image: "/courses/tally.jpg" },
  { title: "Graphic Designing", duration: "3 Months", image: "/courses/graphic.jpg" },
  { title: "Web Designing", duration: "3 Months", image: "/courses/web.jpg" },
];

const renderCourseCard = (course: Course, index: number) => (
  <div
    key={index}
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
  >
    <Link to="/courses" className="block">
      <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-green-800 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600">Duration: {course.duration}</p>
      </div>
    </Link>
  </div>
);

export default function Courses() {
  return (
    <div className="bg-green-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-800 mb-16">
          Explore Our Courses
        </h1>

        {/* Long Term Courses */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6 border-b border-green-200 pb-2">
            Long-Term Courses (1 Year)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {longTermCourses.map(renderCourseCard)}
          </div>
        </section>

        {/* Short Term Courses */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6 border-b border-green-200 pb-2">
            Short-Term Courses (6 Months)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {shortTermCourses.map(renderCourseCard)}
          </div>
        </section>

        {/* Certificate Courses */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-6 border-b border-green-200 pb-2">
            Certificate Courses (Up to 3 Months)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificateCourses.map(renderCourseCard)}
          </div>
        </section>
      </div>
    </div>
  );
}
