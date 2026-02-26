import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function CursorUI({ pos }) {
  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[999999]
                   w-8 h-8 rounded-full
                   border border-primary/60"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[999999]
                   w-3 h-3 rounded-full bg-primary"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return createPortal(<CursorUI pos={pos} />, document.body);
}

export default CustomCursor;
