import mongoose from "mongoose";
import shortid from "shortid";

const linkSchema = new mongoose.Schema({
  long: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate,
  },
});

export const Link = mongoose.model("Link", linkSchema);
