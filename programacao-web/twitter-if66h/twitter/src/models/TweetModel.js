const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  author: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Tweet", TweetSchema);
