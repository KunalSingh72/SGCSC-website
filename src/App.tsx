
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from './pages/HomePage';
import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";



function App() {
  
   

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="courses" element={<Courses />} />
          <Route path="gallery" element={<Gallery />} />

        </Route>  
      </Routes>
    </QueryClientProvider>
  )
}

export default App;
