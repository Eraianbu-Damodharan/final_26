import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import robotImage from "../assets/events.png";

export default function EventModeSelection() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectionColor, setSelectionColor] = useState("transparent");

  const handleSelection = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/events/${category}`);
    }, 800);
  };

  return (<div id="events" className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 overflow-hidden z-10">

      {/* Flash overlay */}
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor:
              selectionColor,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.3em] uppercase mb-2 md:mb-0"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: "#ff1a1a",
            textShadow:
              "0 0 20px #ff1a1a",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CHOOSE YOUR PATH
        </motion.h1>

        {/* Robot Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          {/* Ambient Glow */}
          <motion.div
            className="absolute inset-0 blur-3xl rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 26, 26, 0.25) 0%, transparent 70%)",
              transform: "scale(1.2)",
            }}
            animate={{
              opacity: [0.25, 0.5, 0.25],
              scale: [1.2, 1.3, 1.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Image Wrapper */}
          <div className="relative w-full max-w-[800px] mx-auto px-4 pb-20">
            <img
              src={robotImage}
              alt="Robot"
              className="w-full h-auto object-contain relative z-20"
            />

            {/* ================= BUTTONS (ALIGNED UNDER HANDS) ================= */}
            <div className="absolute bottom-10 md:bottom-12 left-0 w-full flex justify-between px-4 md:px-10 z-30">

              <button
                onClick={() => handleSelection("technical")}
                className="w-[45%] md:w-[40%] px-4 py-3 rounded-lg border border-blue-500 text-blue-400 font-semibold text-xs md:text-sm tracking-wider hover:bg-blue-500/10 transition-colors duration-300"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                TECHNICAL EVENTS
              </button>

              <button
                onClick={() => handleSelection("non-technical")}
                className="w-[45%] md:w-[40%] px-4 py-3 rounded-lg border border-red-500 text-red-400 font-semibold text-xs md:text-sm tracking-wider hover:bg-red-500/10 transition-colors duration-300"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                NON-TECHNICAL EVENTS
              </button>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}