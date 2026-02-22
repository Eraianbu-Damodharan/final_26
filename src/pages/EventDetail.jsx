import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { events } from "../data/events";

export default function EventDetail() {
  const { category, eventId } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Event Not Found
      </div>
    );
  }

  const accentColor =
    category === "technical" ? "#1a6cff" : "#ff1a1a";

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <motion.button
        onClick={() => navigate(`/events/${category}`)}
        className="flex items-center gap-2 mb-10"
        style={{ color: accentColor }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft /> BACK
      </motion.button>

      <motion.h1
        className="text-5xl font-bold mb-8"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          color: accentColor,
          textShadow: `0 0 20px ${accentColor}`,
        }}
      >
        {event.name}
      </motion.h1>

      <p className="text-gray-300 mb-8">
        {event.fullDescription}
      </p>

      <h2 style={{ color: accentColor }} className="mb-4 text-2xl">
        RULES
      </h2>
      <ul className="mb-8 list-disc ml-6">
        {event.rules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>

      <a
        href={event.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-lg font-bold inline-block"
        style={{
          backgroundColor: accentColor,
          color: "#000",
        }}
      >
        REGISTER NOW
      </a>
    </div>
  );
}