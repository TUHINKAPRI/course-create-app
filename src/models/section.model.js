import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  subSection: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subsection",
    },
  ],
});

export const Section = mongoose.model("Section", sectionSchema);
