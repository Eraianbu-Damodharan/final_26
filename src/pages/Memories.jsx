import CircularGallery from "../components/CircularGallery";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import M2 from "../assets/M2.jpeg";
import M3 from "../assets/M3.jpeg";
import M4 from "../assets/M4.jpeg";
import M5 from "../assets/M5.jpeg";
import M6 from "../assets/M6.jpeg";
import M7 from "../assets/M7.jpeg";
import M8 from "../assets/M8.jpeg";
import M9 from "../assets/M9.jpeg";
import Mi from "../assets/Mi.jpeg";

export default function Memories() {
  const navigate = useNavigate();

  const galleryImages = [
    { image: M2, text: "" },
    { image: M3, text: "" },
    { image: M4, text: "" },
    { image: M5, text: "" },
    { image: M6, text: "" },
    { image: M7, text: "" },
    { image: M8, text: "" },
    { image: M9, text: "" },
    { image: Mi, text: "" },
  ];

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* ===== Back Button ===== */}
      <button
        onClick={handleBack}
        className="
          fixed top-8 left-8 z-50
          px-6 py-2
          border border-red-600
          text-red-600
          uppercase tracking-widest
          transition-all duration-300
          hover:bg-red-600 hover:text-black
        "
      >
        ← Back
      </button>

      {/* ===== Title Section ===== */}
      <div className="text-center pt-28 pb-16">

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-4xl md:text-6xl lg:text-7xl tracking-widest text-red-600"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Memories of Celista-2K25

          {/* Glow */}
          <span className="absolute inset-0 text-red-600 blur-2xl opacity-40 pointer-events-none">
            Memories of Celista-2K25
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "240px" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-[3px] bg-red-600 mx-auto mt-6 rounded-full"
        />
      </div>

      {/* ===== Circular Gallery ===== */}
      <div style={{ height: "75vh", position: "relative" }}>
        <CircularGallery
          items={galleryImages}
          bend={5}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={1.5}
          scrollEase={0.03}
        />
      </div>

    </div>
  );
}