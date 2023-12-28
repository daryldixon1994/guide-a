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
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/UserDashboard";
import UserRoute from "./routes/UserRoute";
import PublicRoute from "./routes/PublicRoute";
import AdminRoute from "./routes/AdminRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/guides" element={<Guides />} />
        <Route
          path="/dashboard"
          element={
            <UserRoute>
              <UserDashboard />
            </UserRoute>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/admin/login"
          element={
            <PublicRoute>
              <AdminLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/add"
          element={
            <AdminRoute>
              <AdminAddGuide />
            </AdminRoute>
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
