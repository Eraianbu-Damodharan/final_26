import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import EventModeSelection from "./pages/EventModeSelection";
import EventsList from "./pages/EventsList";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <EventModeSelection />
            </>
          }
        />
        <Route path="/events/:category" element={<EventsList />} />
        <Route path="/events/:category/:eventId" element={<EventDetail />} />
      </Routes>
    </>
  );
}

export default App;