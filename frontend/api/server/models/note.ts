import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  content: {
    type: ObjectId,
    required: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

interface NoteI {
  title: string;
  from: string;
  to: string;
  content: ObjectId;
}

export { Note, NoteI };
