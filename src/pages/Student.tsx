import NavigationGridPage from "../components/NavigationGridPage";
import {
  FileText,
  ClipboardCheck,
  Award,
  GraduationCap,
  LogIn,
} from "lucide-react";

export default function Student() { 
  const studentRoutes = [
    { title: "Enrollment Verification", to: "/student/enrollment-verification", icon: FileText },
    { title: "Result Verification", to: "/student/result-verification", icon: ClipboardCheck },
    { title: "Certificate Verification", to: "/student/certificate-verification", icon: Award },
    { title: "Admit Card", to: "/student/admit-card", icon: GraduationCap },
    { title: "Student Login", to: "/student/login", icon: LogIn },
  ];

  return <NavigationGridPage title="Student Services" routes={studentRoutes} />;
}
