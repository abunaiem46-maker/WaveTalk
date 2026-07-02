import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./style.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <h1>WaveTalk</h1>
        <div className="chat-item">Naiem</div>
        <div className="chat-item">Group Chat</div>
      </div>

      <div className="chat-box">
        <div className="messages">
          <div className="msg left">Hello 👋</div>
          <div className="msg right">WaveTalk Started 🚀</div>
        </div>

        <div className="input-box">
          <input type="text" placeholder="Type message..." />
          <button>Send</button>
        </div>
      </div>
      <Analytics />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
