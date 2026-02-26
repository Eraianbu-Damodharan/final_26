import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { events } from "../data/events";
import Footer from "../components/Footer";
import Footblue from "../components/Footblue";
export default function EventDetail() {
  const { category, eventId } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            EVENT NOT FOUND
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 underline"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const accentColor =
    category === "technical" ? "#1a6cff" : "#ff1a1a";

  return (
    <div className="min-h-screen bg-black text-white overflow-auto">
      
      

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-12">
        
        {/* Back button */}
        <motion.button
          onClick={() => navigate(`/events/${category}`)}
          className="flex items-center gap-2 mb-8 group"
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
            BACK TO EVENTS
          </span>
        </motion.button>

        {/* Event Title */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] uppercase mb-6"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: accentColor,
            textShadow: `0 0 20px ${accentColor}`,
          }}
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {event.name}
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="h-[2px] mb-10 md:mb-12 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accentColor} 0%, transparent 100%)`,
            boxShadow: `0 0 10px ${accentColor}`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 tracking-wider"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: accentColor,
                }}
              >
                DESCRIPTION
              </h2>
              <p
                className="text-gray-300 leading-relaxed text-base md:text-lg"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {event.fullDescription}
              </p>
            </motion.section>

            {/* Prerequisites */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 tracking-wider flex items-center gap-3"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: accentColor,
                }}
              >
                <CheckCircle className="w-6 h-6 md:w-7 md:h-7" />
                PREREQUISITES
              </h2>
              <ul className="space-y-3">
                {event.prerequisites.map((prereq, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-base md:text-lg"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{
                        backgroundColor: accentColor,
                        boxShadow: `0 0 8px ${accentColor}`,
                      }}
                    />
                    {prereq}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Rules */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 tracking-wider flex items-center gap-3"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: accentColor,
                }}
              >
                <AlertCircle className="w-6 h-6 md:w-7 md:h-7" />
                RULES
              </h2>
              <ul className="space-y-3">
                {event.rules.map((rule, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-base md:text-lg"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{
                        backgroundColor: accentColor,
                        boxShadow: `0 0 8px ${accentColor}`,
                      }}
                    />
                    {rule}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Date & Venue */}
            {(event.date || event.venue) && (
              <motion.section
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                
                {event.venue && (
                  <div className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" style={{ color: accentColor }} />
                    <span style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      {event.venue}
                    </span>
                  </div>
                )}
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div
                className="bg-[#111111] rounded-lg p-6 md:p-8 relative overflow-hidden"
                style={{
                  border: `1px solid ${accentColor}40`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="text-xl md:text-2xl font-bold mb-6 text-center tracking-wider"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: accentColor,
                    }}
                  >
                    READY TO COMPETE?
                  </h3>

                  <motion.a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 md:py-5 text-center font-bold text-base md:text-lg tracking-widest rounded-lg relative overflow-hidden group"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      backgroundColor: accentColor,
                      color: "#000",
                      boxShadow: `0 0 30px ${accentColor}80`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        border: `3px solid ${accentColor}`,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${accentColor}`,
                          `0 0 40px ${accentColor}`,
                          `0 0 20px ${accentColor}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <span className="relative z-10">
                      REGISTER NOW
                    </span>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>

                 
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {category === "technical" ? <Footblue /> : <Footer />}
    </div>
  );
}