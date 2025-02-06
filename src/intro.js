import React from 'react';
import './intro.css'; // Include the updated intro.css file

const IntroPage = () => {
  const navigateToLogin = () => {
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div>
      {/* Logo Section */}
      <img src={`${process.env.PUBLIC_URL}/yacht gpt logo.png`} alt="Yacht GPT Logo" className="logo" />

      {/* Main Intro Content */}
      <div className="intro-container">
        <h1>YACHTGPT</h1>
        <p className="description">WHERE AI COMES ALIVE</p>
        <button onClick={navigateToLogin}>Enter</button>
      </div>

      {/* Footer */}
      <footer className="author">MADE WITH ❤️ BY REUBEN PHILIP</footer>
    </div>
  );
};

export default IntroPage;
