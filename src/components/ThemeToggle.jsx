export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        fixed bottom-6 right-6
        w-14 h-14
        rounded-full
        flex items-center justify-center
        bg-black dark:bg-white
        text-white dark:text-black
        shadow-lg
        hover:scale-110
        transition-all duration-300
      "
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}