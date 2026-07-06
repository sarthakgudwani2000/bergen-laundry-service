import { useEffect } from "react";
import "@/App.css";
import { SCHEDULE_ORDER_URL } from "@/lib/brand";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "@/components/Layout";
import BergenLaundry from "@/pages/BergenLaundry";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
function RedirectToExternalBooking() {
  useEffect(() => {
    window.location.replace(SCHEDULE_ORDER_URL);
  }, []);
  return (
    <div className="container-pad py-14 text-center text-slate-600 text-sm">
      Opening our booking partner…
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <HashRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/bergen-laundry-service" replace />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/bergen-laundry-service" element={<BergenLaundry />} />
            <Route
              path="/bergenlaundryservice-com"
              element={<Navigate to="/bergen-laundry-service" replace />}
            />
            <Route
              path="/bergenlaundryservice-com/*"
              element={<Navigate to="/bergen-laundry-service" replace />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/schedule-pickup"
              element={<RedirectToExternalBooking />}
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route
              path="*"
              element={<Navigate to="/bergen-laundry-service" replace />}
            />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}
