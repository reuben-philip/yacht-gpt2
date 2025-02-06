import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./intro";
import LoginPage from "./login";
import SignUpPage from "./signup";
import ProfilePictureSelectionPage from "./profile";
import ModelPage from "./models";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile-selection" element={<ProfilePictureSelectionPage />} />
        <Route path="/models" element={<ModelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
