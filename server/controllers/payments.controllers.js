const { default: mongoose } = require("mongoose");
const { instance } = require("../config/razzorpay.connect");
const Course = require("../models/course.model");
const User = require("../models/user.model");
const crypto = require("crypto");
const CourseProgress = require("../models/courseProgress.model");
const mailsender = require("../utils/mailSender");
exports.capturePayment = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user._id;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Please select a course",
      });
    }
    const findCourse = await Course.findById(courseId);
    if (!findCourse) {
      res.status(400).json({
        success: false,
        message: "Please select a valid course",
      });
    }
    const uid = new mongoose.Types.ObjectId(userId);
    const isExistUser = findCourse.studentJoined.includes(uid);
    if (isExistUser) {
      return res.status(400).json({
        success: false,
        message: "You already purches this course",
      });
    }
    const amount = findCourse.price;
    const options = {
      amount: amount * 100,
      currency: "INR",
      notes: {
        userId: req.user._id,
        courseId: courseId,
      },
    };
    const response = await instance.orders.create(options);
    console.log(response);
    res.status(200).json({
      success: true,
      courseName: findCourse.name,
      courseDescription: findCourse.description,
      courseThumbnail: findCourse.thumbnail,
      orderId: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const razorpay_order_id = req.body?.razorpay_order_id
    const razorpay_payment_id = req.body?.razorpay_payment_id
    const razorpay_signature = req.body?.razorpay_signature
    const { courseId } = req.body;
    const userId = req.user._id;
    // const receivedSignature =
    //   req.headers["x-razorpay-signature"] || req.body?.razorpay_signature;
    // console.log(receivedSignature);
    
    let body = razorpay_order_id + "|" + razorpay_payment_id

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRECT)
    .update(body.toString())
    .digest("hex")

    if (razorpay_signature == expectedSignature) {
    const updatedCourse = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          studentJoined: userId,
        },
      },
      { new: true }
    );
    if (!updatedCourse) {
      return res.status(400).json({
        success: false,
        message: "Somthing went wrong",
      });
    }
    const courseProgress = await CourseProgress.create({
      courseId: courseId,
      userId: userId,
      completedVideos: [],
    })
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $push: {
          courses: updatedCourse._id,
          courseProgress:courseProgress?._id
        },
      },
      { new: true }
    );

    //mail send
    const email = await mailsender(
      userId.email,
      "confirmmation mail",
      "successfully enrolled this course"
    );
      res.status(200).json({
        success: true,
        message: "Congratulation for successfully buying this course",
      });
    } else {
      return res.status(500).json({

        success: false,
        message: "Payment secret is different ",
      });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
