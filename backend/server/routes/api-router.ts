import express from 'express';
import { MongoAPIError } from 'mongodb';
import { Note, Content } from '../models';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/notes', async (req, res) => {
  try {
  const notes = await Note.find();
  res.json(notes);
  } catch (err) {
    console.log(err);
  }
});

router.post('/notes', async (req, res) => {
  const { title, from, to, content } = req.body;
  const note = new Note({
    title,
    from,
    to,
    content,
  });
  await note.save();
  res.json(note);
});

router.post('/contents', async (req, res) => {
  const { text } = req.body;
  Content.create({ text }, (err: MongoAPIError, content: typeof Content) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.json(content);
  });
});

router.get('/contents', async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (err) {
    console.log(err);
  }
});


export default router;