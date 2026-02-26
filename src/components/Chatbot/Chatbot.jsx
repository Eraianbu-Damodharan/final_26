import { useState } from "react";
import { chatbotResponses } from "./chatbotData";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m Celista Bot 🤖. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (text) => {
    const msg = text.toLowerCase();
    for (let item of chatbotResponses) {
      if (item.keywords.some(k => msg.includes(k))) {
        return item.reply;
      }
    }
    return "🤔 I’m not sure about that. Please check the Events or FAQ section!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        Chat💬
      </button>

      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">Celista Bot</div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
