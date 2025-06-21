
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from './pages/HomePage';
import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";
import Student from "./pages/Student";
import EnrollmentVerification from "./components/studentPage/EnrollmentVerification";
import ResultVerification from "./components/studentPage/ResultVerification";
import CertificateVerification from "./components/studentPage/CertificateVerification";
import AdmitCard from "./components/studentPage/AdmitCard";
import StudentLogin from "./components/studentPage/StudentLogin";
import Franchise from "./pages/Franchise";
import FranchiseRegister from "./components/franchisePage/FranchiseRegister";



function App() {
  
   

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="student" element={<Student />} />
          <Route path="/student/enrollment-verification" element={<EnrollmentVerification />} />
          <Route path="/student/result-verification" element={<ResultVerification />} />
          <Route path="/student/certificate-verification" element={<CertificateVerification />} />
          <Route path="/student/admit-card" element={<AdmitCard />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="franchise/register" element={<FranchiseRegister />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />

        </Route>  
      </Routes>
    </QueryClientProvider>
  )
}

export default App;
