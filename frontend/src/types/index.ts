export interface Content {
  text: string;
  font: string;
}

export interface PostNoteI {
  title: string;
  from: string;
  to: string;
  content: string;
  font: string;
}

export interface Note {
  title: string;
  from: string;
  to: string;
  content: Content;
}
