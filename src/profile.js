import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext"; // Import the context
import "./profile.css"; // Profile-specific CSS

const ProfilePictureSelectionPage = () => {
  const { setProfilePicture } = useContext(UserContext); // Access the context to set the profile picture
  const [selectedPicture, setSelectedPicture] = useState(null); // Local state for selected picture
  const navigate = useNavigate();

  // List of profile pictures
  const profilePictures = [
    `${process.env.PUBLIC_URL}/profile1.png`,
    `${process.env.PUBLIC_URL}/profile2.png`,
    `${process.env.PUBLIC_URL}/profile3.png`,
    `${process.env.PUBLIC_URL}/profile4.png`,
  ];

  const handlePictureClick = (index) => {
    setSelectedPicture(index);
  };

  const handleConfirmClick = () => {
    if (selectedPicture === null) {
      alert("Please select a profile picture!");
    } else {
      const picture = profilePictures[selectedPicture];
      setProfilePicture(picture); // Update the context with the selected picture
      localStorage.setItem("profilePicture", picture); // Persist it in localStorage
      alert("Profile picture selected successfully!");
      navigate("/models"); // Redirect to the models page
    }
  };

  return (
    <div className="profile-container">
      <h1>Select Your Avatar</h1>
      <div className="profile-pictures">
        {profilePictures.map((picture, index) => (
          <div
            key={index}
            className={`profile-picture ${
              selectedPicture === index ? "selected" : ""
            }`}
            onClick={() => handlePictureClick(index)}
          >
            <img src={picture} alt={`Profile ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={handleConfirmClick} className="confirm-button">
        Confirm
      </button>
    </div>
  );
};

export default ProfilePictureSelectionPage;
