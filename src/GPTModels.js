import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./gpt.css"; // Use the dedicated chat page CSS

const GPTModel = () => {
  const { modelName } = useParams(); // Get model name from URL
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="gpt-container">
      {/* Model Header */}
      <div className="header">
        <h1 className="affect">{modelName}-GPT</h1>
        <p className="description">Chat with {modelName} GPT</p>
      </div>

      {/* Chat Interface */}
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

export default GPTModel;
