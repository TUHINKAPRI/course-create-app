const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  name:{
    type:String,
    required:[true,"please enter your lastname"],
    trim:true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  accountType: {
    type: String,
    enum: ["Admin", "Student", "Instructor"],
    required:true
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  profile_image: {
    type: String,
    required: true,
  },
  courseProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
