const Course = require("../models/course.model");
const User = require("../models/user.model");
const Category = require("../models/category.models");
const { imageUploader } = require("../utils/imageUploader");

exports.createCourse = async (req, res) => {
  try {
    const {
      courseName,
      description,
      whatWeWillLearn,
      price,
      tags: _tags,
      category,
      requirements,
      language,
    } = req.body;
    const thumbnail = req.files?.thumbnail;
    if (
      !courseName ||
      !description ||
      !whatWeWillLearn.length ||
      !price ||
      !_tags.length ||
      !thumbnail ||
      !category ||
      !requirements.length ||
      !language.length
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validation for category field
    const findCategory = await Category.findById(category);
    if (!findCategory) {
      return res.status(400).json({
        success: false,
        message: "Category doesn't exist",
      });
    }
    // Validation for instructor
    const findInstructor = await User.findById(req.user._id);
    if (!findInstructor) {
      return res.Status(400).json({
        success: false,
        message: "User not found",
      });
    }

    //upload to cloudinary
    const upload = await imageUploader(thumbnail, process.env.FOLDER_NAME);
    const newCourse = await Course.create({
      courseName,
      description,
      instructor: findInstructor._id,
      whatWeWillLearn: JSON.parse(whatWeWillLearn),
      category: findCategory._id,
      price,
      thumbnail: upload?.secure_url,
      tags: JSON.parse(_tags),
      requirements: JSON.parse(requirements),
      language: JSON.parse(language),
    });
    //add this course into the instructor schema
    await User.findByIdAndUpdate(
      { _id: findInstructor._id },
      { $push: { courses: newCourse._id } },
      { new: true }
    );
    //add this course to the category also

    await Category.findByIdAndUpdate(
      { _id: category },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.getAllCourses = async (req, res) => {
  console.log(req.query);
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }

    console.log(filter);
    const course = await Course.find({
      ...filter,
      ...(req.query.search && {
        courseName: { $regex: req.query.search, $options: "i" },
      }),
    }).populate("instructor");
    res.status(200).json({
      success: true,
      message: "Course fetch successfully",
      course,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
//single course
exports.getCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.params;
    const courseDetails = await Course.findOne({ _id: courseId })
      .populate({
        path: "instructor",
      })
      .populate("category")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .populate("ratingAndReview");
    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: "Could find the course with this course id",
      });
    }

    res.status(200).json({
      success: true,
      message: "course fetch is successfully",
      course: courseDetails,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    // const findCourse=await Course.findByIdAndUpdate({_id:courseId},{
    //   $set:{}
    // })
    res.status(200).json({
      success: true,
      message: "Not ready right now",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getInstructorCourse = async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.user._id });
    res.status(200).json({
      success: true,
      courses: courses,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

exports.getStudentCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    const userCourse = await Course.find({ studentJoined: userId }).populate({
      path: "courseContent",
      populate: { path: "subSection" },
    });
    if (!userCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }
    res.status(200).json({
      success: true,
      course: userCourse,
    });
  } catch (err) {
    console.log("getStudentcourse error---" + err);
    res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
};
