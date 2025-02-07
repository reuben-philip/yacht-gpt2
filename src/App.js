/*import React from "react";
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

export default App;*/


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./intro";
import LoginPage from "./login";
import SignUpPage from "./signup";
import ProfilePictureSelectionPage from "./profile";
import ModelPage from "./models";
import AatishGPTPage from "./aatish";
//import AdityaGPTPage from "./gpts/AdityaGPT";
//import AnirudhGPTPage from "./gpts/AnirudhGPT";
//import ConnorGPTPage from "./gpts/ConnorGPT";
//import MayankGPTPage from "./gpts/MayankGPT";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile-selection" element={<ProfilePictureSelectionPage />} />
        <Route path="/models" element={<ModelPage />} />

        <Route path="/aatish" element={<AatishGPTPage />} />
      </Routes>
    </Router>
  );
}

export default App;

