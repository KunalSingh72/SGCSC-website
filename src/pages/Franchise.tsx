import NavigationGridPage from "../components/NavigationGridPage";
import {
  UserPlus,
  Info,
  ShieldCheck,
  ListOrdered,
  LogIn,
} from "lucide-react";

export default function Franchise() { 
  const franchiseRoutes = [
    { title: "Franchise Registration Online", to: "/franchise/register", icon: UserPlus },
    { title: "Franchise Details", to: "/franchise/details", icon: Info },
    { title: "Franchise Verification", to: "/franchise/verification", icon: ShieldCheck },
    { title: "Study Center List", to: "/franchise/centers", icon: ListOrdered },
    { title: "Center Login", to: "/franchise/login", icon: LogIn },
  ];

  return <NavigationGridPage title="Franchise Services" routes={franchiseRoutes} />;
}
