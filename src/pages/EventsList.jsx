import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { events } from "../data/events";

export default function EventsList() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredEvents = events.filter(
    (event) => event.category === category
  );

  const accentColor =
    category === "technical" ? "#1a6cff" : "#ff1a1a";

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <motion.button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-10"
        style={{ color: accentColor }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft /> BACK
      </motion.button>

      <motion.h1
        className="text-5xl font-bold mb-12 text-center"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          color: accentColor,
          textShadow: `0 0 20px ${accentColor}`,
        }}
      >
        {category === "technical"
          ? "TECHNICAL EVENTS"
          : "NON-TECHNICAL EVENTS"}
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            className="bg-[#111] p-6 rounded-lg cursor-pointer border border-gray-800"
            whileHover={{ y: -8 }}
            onClick={() =>
              navigate(`/events/${category}/${event.id}`)
            }
          >
            <h3
              className="text-2xl mb-4"
              style={{ color: accentColor }}
            >
              {event.name}
            </h3>

            <p className="text-gray-400 mb-6">
              {event.description}
            </p>

            <div className="flex justify-between items-center">
              <span style={{ color: accentColor }}>
                VIEW DETAILS
              </span>
              <ChevronRight style={{ color: accentColor }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}