import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GPTModels";

const AatishGPT = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="model-container">
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aatish-gpt">Aatish-GPT</Link></li>
          <li><Link to="/aditya-gpt">Aditya-GPT</Link></li>
          <li><Link to="/anirudh-gpt">Anirudh-GPT</Link></li>
          <li><Link to="/connor-gpt">Connor-GPT</Link></li>
          <li><Link to="/mayank-gpt">Mayank-GPT</Link></li>
        </ul>
      </nav>

      {/* Model Header */}
      <div className="header">
        <h1 className="affect">Aatish-GPT</h1>
        <p className="description">It's Time to Ball Up</p>
      </div>

      {/* Chat Container */}
      <div id="container">
        <div className="chatbox">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="textbox">
          <textarea
            type="text"
            placeholder="Type something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="click">
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AatishGPT;
