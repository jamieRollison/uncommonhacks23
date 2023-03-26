import axios from 'axios';
import { Note, Content } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getNotes = async () => {
  const { data } = await api.get('/notes');
  return data;
}

export const createNote = async (note: Note) => {
  const { data } = await api.post('/notes', note);
  return data;
}

export const getNote = async (id: string) => {
  const { data } = await api.get(`/notes/${id}`);
  const content = await getContent(data.content);
  return {
    ...data,
    content,
  };
}

export const getContent = async (id: string) => {
  const { data } = await api.get(`/content/${id}`);
  return data;
}