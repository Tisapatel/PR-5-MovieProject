const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    language: { type: String, default: "" },
    genre: { type: String, default: "" },
    category: { type: String, default: "" }, // recommended, premiere, music, outdoor, popular
    bannerImage: { type: String, default: "" }, // file path (/uploads/xxx) or URL
    posterImage: { type: String, default: "" }  // file path (/uploads/xxx) or URL
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
