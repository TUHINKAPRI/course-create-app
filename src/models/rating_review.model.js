import mongoose from 'mongoose';

const ratingAndReviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
    trim: true,
  },
});

export const Rating_And_Review= mongoose.model("RatingAndReview", ratingAndReviewSchema);