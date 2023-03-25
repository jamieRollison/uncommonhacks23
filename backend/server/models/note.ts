import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { Content } from './content';

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

export const Note = mongoose.model('Note', noteSchema);