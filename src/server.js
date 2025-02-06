const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs"); // Ensure correct spelling of bcrypt
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = 5000;
const SECRET_KEY = "iY1qpX#3Fw93!2m";

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yachtgpt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the server"))
  .catch((err) => console.error("Connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" }, // To store selected profile picture
});

const User = mongoose.model("User", userSchema);

// Register Endpoint
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User successfully registered" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login Endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ username: user.username, token }); // Send username with the token
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Profile Picture Update Endpoint
app.post("/profile-picture", async (req, res) => {
  const { profilePicture } = req.body;
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.profilePicture = profilePicture;
    await user.save();

    res.json({ message: "Profile picture updated successfully" });
  } catch (error) {
    console.error("Error updating profile picture:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Protected Route
app.get("/protected", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    res.json({ message: "Access granted", user: decoded });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(403).json({ message: "Invalid token" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
