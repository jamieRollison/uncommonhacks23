import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  // whatever goes in here (for now it is just text)
  text: {
    type: String,
    required: true,
  },
});

const Content = mongoose.model("Content", contentSchema);

export { Content };
