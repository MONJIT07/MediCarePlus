import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CircleChevronUp } from "lucide-react";

import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import DoctorsDetails from "./Pages/DoctorsDetails";
import Service from "./Pages/Service";
import ServiceDetailPage from "./Pages/ServiceDetailPage";

import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import DHome from "./Pages/DHome";
import List from "./Components/List";
import EditProfile from "./Doctor/EditProfile";
import Appointments from "./Pages/Appointment";
import VerifyPaymentPage from "../VerifyPaymentPage";
import VerifyServicePaymentPage from "../VerifyServicePaymentPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      className={`fixed right-4 bottom-6 z-50 w-11 h-11 rounded-full flex items-center justify-center 
      bg-emerald-600 text-white shadow-lg transition-all duration-300 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} 
      hover:scale-110 hover:shadow-xl`}
      title="Go to top"
    >
      <CircleChevronUp size={22} />
    </button>
  );
};

const App = () => {
  // to lock the horizontal overflow (moved INSIDE the component)
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
      document.documentElement.style.overflowX = "auto";
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <ScrollButton />
      <div className="overflow-x-hidden bg-white text-grey-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorsDetails />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Appointments" element={<Appointments />} />
          
          {/* Doctor Admin Routes */}   
          <Route path="/doctor-admin/login" element={<Login />} />
          <Route path="/doctor-admin/:id" element={<DHome />} /> 
          <Route path="/doctor-admin/:id/appointments" element={<List />} />
          <Route path="/doctor-admin/:id/profile/edit" element={<EditProfile />} />

          <Route path="/appointment/success" element={<VerifyPaymentPage />} />
          <Route path="/appointment/cancel" element={<VerifyPaymentPage />} />

          <Route path="/service-appointment/success" element={<VerifyServicePaymentPage />} />
          <Route path="/service-appointment/cancel" element={<VerifyServicePaymentPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;