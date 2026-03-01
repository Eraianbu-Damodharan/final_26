import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

function CustomCursor() {
  const innerDotRef = useRef(null);
  const outerRingRef = useRef(null);

  useEffect(() => {
    const innerDot = innerDotRef.current;
    const outerRing = outerRingRef.current;

    if (!innerDot || !outerRing) return;

    // Set initial positions and centering
    gsap.set([innerDot, outerRing], { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Inner dot moves instantly
      gsap.to(innerDot, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Outer ring has a slight delay for a smooth trailing effect
      gsap.to(outerRing, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return createPortal(
    <>
      {/* Outer ring */}
      <div
        ref={outerRingRef}
        className="fixed pointer-events-none z-[999999] top-0 left-0
                   w-8 h-8 rounded-full
                   border border-primary/60"
      />

      {/* Inner dot */}
      <div
        ref={innerDotRef}
        className="fixed pointer-events-none z-[999999] top-0 left-0
                   w-3 h-3 rounded-full bg-primary"
      />
    </>,
    document.body
  );
}

export default CustomCursor;
