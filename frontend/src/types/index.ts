export interface Content {
  text: string;
}

export interface Note {
  title: string;
  from: string;
  to: string;
  body: Content;
}