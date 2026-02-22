import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import robotImage from "../assets/events.png";

export default function EventModeSelection() {
  const navigate = useNavigate();
  const [hoverState, setHoverState] = useState("none");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelection = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/events/${category}`);
    }, 700);
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            animate={{
              y: Math.random() * height,
              x: Math.random() * width,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Flash overlay */}
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundColor: hoverState === "blue" ? "#1a6cff" : "#ff1a1a",
          }}
        />
      )}

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-widest mb-12"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: "#ff1a1a",
            textShadow: "0 0 20px #ff1a1a",
          }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SELECT EVENT MODE
        </motion.h1>

        <div className="relative w-[90vw] md:w-[700px] mx-auto">
          <img src={robotImage} alt="Robot" className="w-full" />

          {/* Blue Side */}
          <motion.div
            className="absolute left-[5%] top-[35%] w-[30%] h-[45%] cursor-pointer"
            onMouseEnter={() => setHoverState("blue")}
            onMouseLeave={() => setHoverState("none")}
            onClick={() => handleSelection("technical")}
            whileHover={{ scale: 1.1 }}
          >
            {hoverState === "blue" && (
              <motion.div
                className="absolute inset-0 blur-2xl rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(26,108,255,0.8) 0%, transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>

          {/* Red Side */}
          <motion.div
            className="absolute right-[5%] top-[35%] w-[30%] h-[45%] cursor-pointer"
            onMouseEnter={() => setHoverState("red")}
            onMouseLeave={() => setHoverState("none")}
            onClick={() => handleSelection("non-technical")}
            whileHover={{ scale: 1.1 }}
          >
            {hoverState === "red" && (
              <motion.div
                className="absolute inset-0 blur-2xl rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,26,26,0.8) 0%, transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}