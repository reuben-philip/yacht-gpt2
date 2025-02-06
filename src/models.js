import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext"; // Import UserContext to access the profile picture
import "./models.css";

const ModelPage = () => {
  const { profilePicture } = useContext(UserContext); // Access the profile picture from the context
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    localStorage.clear(); // Clear user-related data
    navigate("/login"); // Redirect to login page
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="models-container">
      <img src={`${process.env.PUBLIC_URL}/yacht gpt logo.png`} alt="Yacht GPT Logo" className="logo" />
      {/* Profile Section */}
      <div className="profile-container">
        {profilePicture && (
          <img
            src={profilePicture}
            alt="User Profile"
            className="profile-picture"
            onClick={toggleDropdown}
          />
        )}
        {showDropdown && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Model Content */}
      <h1 className="models-title">Welcome!</h1>
      <div className="models-description">
        <span className="models-heading">Models:</span>
        <div>
          <Link to="/aatishgpt" className="model-link">
            AatishGPT
          </Link>
        </div>
        <div>
          <Link to="/adityagpt" className="model-link">
            AdityaGPT
          </Link>
        </div>
        <div>
          <Link to="/anirudhgpt" className="model-link">
            AnirudhGPT
          </Link>
        </div>
        <div>
          <Link to="/connorgpt" className="model-link">
            ConnorGPT
          </Link>
        </div>
        <div>
          <Link to="/mayankgpt" className="model-link">
            MayankGPT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
