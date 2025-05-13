const mongoose = require("mongoose");

const problemSchema = new mongoose.schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty cannot be empty"],
    default: "easy",
  },
  testCases: {
    input: {
      type: String,
      required: [true, "Input cannot be empty"],
    },
    output: {
      type: String,
      required: [true, "Input cannot be empty"],
    },
    editorial: {
      type: String,
    },
  },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
