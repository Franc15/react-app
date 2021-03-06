import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import Signup from "./components/Signup";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import { SendData, SendDataImage } from "./components/SendData";
import Checkout from "./components/Checkout";
import Page404 from "./components/404";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="send" element={<SendData />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="sendtextimage" element={<SendDataImage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
