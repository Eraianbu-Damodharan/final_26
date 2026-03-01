import { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="chatbot-toggle"
        onClick={() => setOpen(!open)}
      >
        Chat 💬
      </button>

      {open && (
        <div className="chatbot-container iframe-mode">
          <div className="chatbot-header">
            Celista AI Assistant
          </div>

          <iframe
            src="https://sudharsann-celista-ai.hf.space"
            title="Celista AI"
            className="chatbot-iframe"
            allow="clipboard-write"
          />
        </div>
      )}
    </>
  );
};

export default Chatbot;