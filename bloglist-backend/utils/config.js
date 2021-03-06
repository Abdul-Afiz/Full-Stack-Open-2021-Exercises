require("dotenv").config();

const mongoUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

const PORT = process.env.port || 5001;

module.exports = {
  mongoUrl,
  PORT,
};
