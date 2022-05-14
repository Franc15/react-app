import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import Signup from "./components/Signup";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </div>
  );
}
