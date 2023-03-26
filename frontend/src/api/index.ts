import axios from "axios";
import { PostNoteI } from "../types";

const api = axios.create({
  baseURL: `${import.meta.env.DEV ? 'localhost:3000' : window.location.origin}/api`,
});

console.log(window.location.origin);
export const getNotes = async () => {
  const { data } = await api.get("/notes");
  return data;
};

export const createNote = async (note: PostNoteI) => {
  const { data } = await api.post("/notes", note).catch((err) => {
    // console.log(err)
    throw err;
  });
  return data;
};

export const viewNote = async (short: string) => {
  const note = await api.get(`/${short}`).then((res) => res.data);
  const content = await api.get(`/content/${note.content}`);
  return {
    ...note,
    content: content.data,
  };
};
export const getNote = async (id: string) => {
  const { data } = await api.get(`/notes/${id}`);
  const content = await getContent(data.content);
  return {
    ...data,
    content: content.data,
  };
};

export const getContent = async (id: string) => {
  const { data } = await api.get(`/content/${id}`);
  return data;
};
