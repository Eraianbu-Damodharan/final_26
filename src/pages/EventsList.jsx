import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Zap, ChevronRight } from "lucide-react";
import { events } from "../data/events";
import Footer from "../components/Footer";
import Footblue from "../components/Footblue";

export default function EventsList() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredEvents = events.filter(
    (event) => event.category === category
  );

  const accentColor =
    category === "technical" ? "#ffffff" : "#ff1a1a";

  const title =
    category === "technical"
      ? "TECHNICAL EVENTS"
      : "NON-TECHNICAL EVENTS";

  return (
    <div className="min-h-screen bg-black text-white overflow-auto">
      {/* Vignette effect */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black pointer-events-none z-0" />

      {/* Animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-8 md:py-12">
        {/* Back button */}
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-8 md:mb-12 group"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: accentColor,
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm md:text-base tracking-wider">
            BACK TO MODE SELECTION
          </span>
        </motion.button>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] uppercase mb-12 md:mb-16 text-center"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: accentColor,
            textShadow: `0 0 20px ${accentColor}`,
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() =>
                navigate(`/events/${category}/${event.id}`)
              }
            >
              <motion.div
                className="relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 blur-xl rounded-lg -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: accentColor }}
                />

                <div
                  className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-lg overflow-hidden h-full flex flex-col"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <motion.div
                    className="h-1 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${accentColor} 0%, transparent 100%)`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1 + 0.3,
                    }}
                  />

                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="p-3 rounded-lg"
                        style={{
                          backgroundColor: `${accentColor}15`,
                          border: `1px solid ${accentColor}40`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Zap
                          className="w-6 h-6"
                          style={{ color: accentColor }}
                        />
                      </motion.div>

                      <div
                        className="px-3 py-1 rounded-full text-xs tracking-widest"
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          backgroundColor: `${accentColor}20`,
                          color: accentColor,
                          border: `1px solid ${accentColor}40`,
                        }}
                      >
                        #{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <h3
                      className="text-xl md:text-2xl font-bold mb-3 tracking-wide leading-tight"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: "white",
                        textShadow: `0 0 10px ${accentColor}60`,
                      }}
                    >
                      {event.name}
                    </h3>

                    <p
                      className="text-gray-400 text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {event.description}
                    </p>
                  </div>

                  <div
                    className="h-[1px] mx-6 mb-4"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accentColor}40, transparent)`,
                    }}
                  />

                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      {event.date && (
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <Calendar className="w-4 h-4" />
                          <span style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            {event.date.split(",")[0]}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Users className="w-4 h-4" />
                        <span style={{ fontFamily: "'Orbitron', sans-serif" }}>
                          {event.prerequisites.length > 0 ? "TEAM" : "SOLO"}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center justify-between px-4 py-3 rounded-lg group/btn"
                      style={{
                        backgroundColor: `${accentColor}10`,
                        border: `1px solid ${accentColor}30`,
                      }}
                      whileHover={{
                        backgroundColor: `${accentColor}20`,
                        borderColor: accentColor,
                      }}
                    >
                      <span
                        className="text-sm tracking-wider"
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          color: accentColor,
                        }}
                      >
                        VIEW DETAILS
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight
                          className="w-4 h-4"
                          style={{ color: accentColor }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      border: `1px solid ${accentColor}`,
                      boxShadow: `0 0 20px ${accentColor}40, inset 0 0 20px ${accentColor}10`,
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ y: "-100%" }}
                    whileHover={{ y: "100%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                  >
                    <div
                      className="h-[2px] w-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                        boxShadow: `0 0 10px ${accentColor}`,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {category === "technical" ? <Footblue /> : <Footer />}
    </div>
  );
}