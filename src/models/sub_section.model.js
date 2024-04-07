import mongoose from 'mongoose';

const subsectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timeDuration: {
    type: String,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

const Sub_section = mongoose.model("Subsection", subsectionSchema);

export { Sub_section};
