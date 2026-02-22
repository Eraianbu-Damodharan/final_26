export default function RevealLayer({ radius }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255, 255, 255, 0.7)",
        clipPath: `circle(${radius}% at 50% 50%)`,
        transition: "clip-path 0.05s linear",
        zIndex: 50, // 🔥 ABOVE SHUTTERS
        pointerEvents: "none"
      }}
    />
  );
}