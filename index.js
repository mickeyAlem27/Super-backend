const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./controllers/userAccountController");
const accountManagementRoutes = require("./routes/accountManagementRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/supper-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Supper APP Backend!" });
});

// Account management routes
app.use("/account", accountManagementRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
