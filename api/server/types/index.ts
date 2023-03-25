import { ObjectId } from "mongodb";

export interface ContentI {
  text: string;
}

export interface NoteI {
  title: string;
  from: string;
  to: string;
  content: ObjectId;
}
