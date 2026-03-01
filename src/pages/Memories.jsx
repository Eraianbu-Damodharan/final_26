import CircularGallery from "../components/CircularGallery";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

  return (
    <div className="min-h-screen text-white font-inter overflow-x-hidden">

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="fixed top-8 left-6 md:left-12 z-50 flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-mono tracking-widest uppercase">Back to Home</span>
      </motion.button>

      {/* Title Section */}
      <div className="relative z-10 pt-32 pb-12 px-4 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-light tracking-[0.25em] text-red-400 mb-6">
            GALLERY
          </h1>
          <p className="text-gray-400 font-inter text-sm md:text-lg tracking-wide">
            A visual journey through CELISTA 2K25.
          </p>
        </motion.div>
      </div>

      {/* Circular Gallery */}
      <div className="relative w-full h-[60vh] md:h-[70vh] mb-20">
        <CircularGallery
          items={galleryImages}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      {/* Description Section */}
      <motion.div 
        className="max-w-3xl mx-auto text-center px-6 pb-24 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-300 font-inter text-base md:text-lg leading-relaxed">
          A curated glimpse into the innovation, collaboration, and unforgettable energy that defined CELISTA 2K25. Each frame captures a story of passion, creativity, and competitive spirit.
        </p>
      </motion.div>

    </div>
  );
}