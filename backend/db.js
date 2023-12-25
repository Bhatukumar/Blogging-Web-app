const url = "mongodb+srv://ecodream:ecodream@restaurantmanagementdb.ke7wwid.mongodb.net/blogwebsite?retryWrites=true&w=majority";


// Example dbconnection.js

const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error; // Rethrow the error to handle it in the calling module if needed
  }
};

module.exports = dbConnection;

