const mongoose = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subsection",
    }
  ],
});

const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);

module.exports = CourseProgress;
