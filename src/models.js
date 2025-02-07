/*import React, { useContext, useState } from "react";
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

export default ModelPage;*/
import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext"; // Ensure this file exists and is correctly implemented
import "./models.css";

const ModelPage = () => {
  const { profilePicture, username } = useContext(UserContext); // Get profile & username
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Handles sign out and redirects to login page
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Toggles the profile dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Closes dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="models-container">
      {/* Logo */}
      <img src={`${process.env.PUBLIC_URL}/yacht gpt logo.png`} alt="Yacht GPT Logo" className="logo" />

      {/* Profile Section */}
      <div className="profile-container" ref={dropdownRef}>
        {profilePicture && (
          <img src={profilePicture} alt="User Profile" className="profile-picture" onClick={toggleDropdown} />
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
      <h1 className="models-title">Welcome, {username || "Guest"}!</h1>
      <div className="models-description">
        <span className="models-heading">Models:</span>
        <div><Link to="/aatishgpt" className="model-link">AatishGPT</Link></div>
        <div><Link to="/adityagpt" className="model-link">AdityaGPT</Link></div>
        <div><Link to="/anirudhgpt" className="model-link">AnirudhGPT</Link></div>
        <div><Link to="/connorgpt" className="model-link">ConnorGPT</Link></div>
        <div><Link to="/mayankgpt" className="model-link">MayankGPT</Link></div>
      </div>
    </div>
  );
};

export default ModelPage;
