import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import eyes from "../assets/eyes.png";
import circuit from "../assets/circuit.png";
import core from "../assets/core.png";
import preparation from "../assets/preparation.png";
import logo from "../assets/logo.png";

const stages = [
  {
    title: "Official Announcement",
    subtitle: "📢 Symposium Reveal",
    date: "TBA",
    robot: eyes,
    terminal: "Initializing optical system..."
  },
  {
    title: "Website Launch",
    subtitle: "🌐 Public Portal Activated",
    date: "TBA",
    robot: circuit,
    terminal: "Booting circuit framework..."
  },
  {
    title: "Registration Opens",
    subtitle: "📝 Participant Enrollment Begins",
    date: "TBA",
    robot: core,
    terminal: "Core module installed..."
  },
  {
    title: "Early Bird Deadline",
    subtitle: "⏳ Priority Access Closed",
    date: "TBA",
    robot: preparation,
    terminal: "Preparation sequence engaged..."
  },
  {
    title: "Symposium Day",
    subtitle: "🚀 Events Begin",
    date: "2K26",
    robot: logo,
    terminal: "System fully activated."
  }
];

export default function Timeline() {
  const [activeStage, setActiveStage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 3000); // change stage every 3 seconds
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white px-6 md:px-20 py-14 pb-28 relative">
      
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase">
          THE ROAD TO <span className="text-red-600">CELista 2K26</span>
        </h2>
        <p className="text-gray-400 mt-4 tracking-wide">
          Where Vision Becomes Experience.
        </p>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT: TIMELINE */}
        <div className="relative">

            {/* Full Vertical Line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-red-600 via-red-500 to-red-600 shadow-[0_0_12px_rgba(255,0,0,0.5)]" />

            <div className="space-y-4 md:space-y-6">
                {stages.map((stage, index) => {
                const isActive = activeStage === index;
                const isLeft = index % 2 === 0;

                return (
                    <div key={index} className="relative flex items-start md:items-center justify-start md:justify-center">

                    {/* Node */}
                    <button
                        onClick={() => {
                            setActiveStage(index);
                          }}
                          className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 border-2 transition-all duration-300 z-10
                            ${isActive 
                              ? "bg-red-600 border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.9)] scale-125"
                              : "bg-black border-red-600"}`}
                    />

                    {/* Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`
                            w-full md:w-[36%]
                            ${isActive 
                                ? "border-2 border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.6)]"
                                : "border border-red-600"}
                            px-6 py-5
                            bg-black
                            flex flex-col justify-center
                            text-left
                            ${isLeft 
                                ? "md:mr-auto md:text-right md:items-end md:pr-12" 
                                : "md:ml-auto md:text-left md:items-start md:pl-12"}
                          `}
                    >
                        <h3 className={`text-sm md:text-base font-semibold uppercase tracking-wider mb-2
                            ${isActive ? "text-red-500" : "text-white"}`}>
                            {stage.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            {stage.subtitle}
                        </p>

                        <p className="text-gray-500 text-xs tracking-widest mt-3 opacity-70">
                            {stage.date}
                        </p>
                    </motion.div>

                    </div>
                );
                })}
            </div>
            </div>

        {/* RIGHT: ROBOT DISPLAY */}
        <div className="relative border border-red-600 p-6 bg-black min-h-[420px] flex flex-col justify-center items-center max-h-[380px]">
          
          {/* Subtle Red Energy Glow */}
          <div className="absolute inset-0 bg-red-600 opacity-[0.04] blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.img
              key={activeStage}
              src={stages[activeStage].robot}
              alt="Robot Stage"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-h-[350px] object-contain relative z-10"
            />
          </AnimatePresence>

          {/* TERMINAL MICRO TEXT */}
          <motion.div
            key={stages[activeStage].terminal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-red-500 font-mono mt-8 opacity-70 tracking-wider"
          >
            &gt; {stages[activeStage].terminal}
          </motion.div>

        </div>
      </div>
    </section>
  );
}