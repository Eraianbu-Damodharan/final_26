import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const creditsData = [
  {
    role: "SYMPOSIUM COORDINATORS",
    names: [
      "Adhavsaran R",
      "Harshita P R",
      "Praveen R",
      "Yuvashree A R"
    ]
  },
  {
    role: "WEBSITE DEVELOPMENT",
    names: [
      "Eraianbu D",
      "Sreesanth S",
      "Sudharsann C S",
      "Sanjita R",
      "Sreenidhi V"
    ]
  },
  {
    role: "DESIGN",
    names: ["XXX", "XXX", "XXX"]
  },
  {
    role: "EDITING",
    names: ["XXX", "XXX", "XXX"]
  },
  {
    role: "EVENT COORDINATORS",
    names: [
      "Dakshineshwar Vel A",
      "Eraianbu D",
      "Harish E",
      "Nikhitha S",
      "Paranthaman P",
      "Swapnika",
      "Sanjita R",
      "Sarika R",
      "Sudharsann C S",
      "Varshaa P S"
    ]
  },
  {
    role: "EVENT CO-COORDINATORS",
    names: [
      "XXX",
      "XXX",
      "XXX",
      "XXX",
      "XXX",
      "XXX",
      "XXX",
      "XXX",
      "XXX",
      "XXX"
    ]
  },
  {
    role: "STAFF COORDINATORS",
    names: [
      "Mrs. Dhivya T",
      "Mrs. Jayapriya A",
      "Mrs. Valentina G",
      "Dr. Ramasubramaniyan G",
      "Mrs. Punitha T",
      "Mrs. Ani Bernish T",
      "Mrs. Prema",
      "Mr. Prabhakaran T",
      "Mrs. Sabhitha C H",
      "Ms. Yogitha"
    ]
  }
];

export default function Credits() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % creditsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = creditsData[index];

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex items-center px-6 md:px-20 py-16">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#ff0000_1px,transparent_0)] bg-[length:22px_22px]" />

      <div className="relative z-10 w-full">
        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-16 items-center">
          
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-center items-center text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight tracking-wide text-center">
              <span className="text-white whitespace-nowrap">
                THE FORCE BEHIND
              </span>
              <br />
              <span className="text-red-600">
                CELISTA 2K26
               </span>
            </h1>

            <p className="text-lg text-gray-400">
              Built by Vision. Powered by Passion.
            </p>
          </div>

          {/* CENTER DIVIDER */}
          <div className="w-[1px] h-[420px] bg-red-600 opacity-70" />

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-2xl border border-red-600 bg-black/90 backdrop-blur-sm px-12 py-8">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  {/* Terminal header */}
                  <div className="text-xs text-red-500 font-mono space-y-1 opacity-60 mb-6">
                    <p>&gt; Initializing...</p>
                    <p>&gt; Rendering profile...</p>
                    <p>&gt; Access granted.</p>
                  </div>

                  {/* Role */}
                  <p className="text-2xl tracking-[4px] text-red-600 uppercase text-center border-b border-red-600 pb-4 mb-10">
                    {active.role}
                  </p>

                  {/* Names List */}
                  <div className="flex flex-col items-center space-y-4">
                    {active.names.map((person, i) => (
                      <p
                        key={i}
                        className="
                          text-xl
                          md:text-2xl
                          text-white
                          font-light
                          tracking-wide
                          text-center
                          leading-snug
                          transition-all
                          duration-300
                          ease-out
                          hover:text-red-500
                          hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]
                          hover:scale-105
                          cursor-pointer
                        "
                      >
                        {person}
                      </p>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="text-xs text-gray-500 tracking-wide mt-10">
                    Powering CELISTA 2K26
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex space-x-3 mt-8">
              {creditsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 border border-red-600 transition-all duration-300 ${
                    i === index
                      ? "bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.7)] scale-110"
                      : "hover:bg-red-600/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex flex-col gap-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold uppercase leading-tight tracking-wide">
              <span className="text-white">THE FORCE BEHIND</span>
              <br />
              <span className="text-red-600">CELISTA 2K26</span>
            </h1>

            <p className="text-gray-400 mt-4 text-center">
              Built by Vision. Powered by Passion.
            </p>
          </div>

          <div className="w-full border border-red-600 bg-black/80 backdrop-blur-sm p-6 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full"
              >
                <div className="text-xs text-red-500 font-mono space-y-1 opacity-60 mb-4">
                  <p>&gt; Initializing...</p>
                  <p>&gt; Rendering profile...</p>
                  <p>&gt; Access granted.</p>
                </div>

                <p className="text-xs tracking-widest text-red-600 uppercase border-b border-red-600 pb-2 mb-6 text-center">
                  {active.role}
                </p>

                <div className="flex-1 overflow-y-auto space-y-4 text-center">
                  {active.names.map((person, i) => (
                    <p
                      key={i}
                      className="text-lg text-white transition-all duration-300 hover:text-red-500"
                    >
                      {person}
                    </p>
                  ))}
                </div>

                <div className="text-xs text-gray-500 mt-4">
                  Powering CELISTA 2K26
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}