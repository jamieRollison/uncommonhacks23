import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  // whatever goes in here (for now it is just text)
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    enum: ["palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "rebeccapurple",
      "black"],
      // font faces: Delicious Handrawn, Alkatra, Libre Baskerville,Helvetica
      // other fonts: idk
  },
  font: {
    type: String,
    required: true,
    enum: [
      "librebaskerville",
      "delicioushandrawn",
      "alkatra",
      "redactedscript",
      "robotomono"
    ]
  }
});

const Content = mongoose.model("Content", contentSchema);

export { Content };
