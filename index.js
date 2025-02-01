require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Ensure MONGO_URI is defined in the .env file
if (!MONGO_URI) {
  console.error('MONGO_URI is not defined in the .env file');
  process.exit(1);  // Exit if the URI is not available
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to database');
    // Start the server only after a successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);  // Exit if the database connection fails
  });

// Basic Route
app.get('/', (req, res) => {
  res.send('Customer Management System Backend is Running');
});