import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Guides from "./pages/Guides";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAddGuide from "./pages/AdminAddGuide";
import AdminLogin from "./pages/AdminLogin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AdminAddGuide />} />
        <Route path="*" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
