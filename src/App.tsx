import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import AnimatedBackground from "./components/AnimatedBackground";
import WaterBackground from "./components/WaterBackground";
import GlowCursor from "./components/GlowCursor";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Loader />

      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">

        {/* ФОНЫ — оставляем здесь, они работают */}
        <WaterBackground />
        <AnimatedBackground />
        <GlowCursor />

        <Navbar />

        <main className="relative z-[1]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Portfolio />
                  <Pricing />
                  <Stats />
                  <Testimonials />
                  <Contact />
                </>
              }
            />

            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
