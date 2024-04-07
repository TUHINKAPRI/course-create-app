import mongoose from 'mongoose'

const courseProgressSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
  },
  completedVideo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subsection",
  },
});

const Course_Progress = mongoose.model("CourseProgress", courseProgressSchema);

export {Course_Progress};