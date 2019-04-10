const mongoose = require("mongoose");

const ConferenceSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    dateFrom: String,
    dateTo: String,
    location: String,
    relatedSkills: [Skill]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Conference", ConferenceSchema);
