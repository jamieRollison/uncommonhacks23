import express from "express";
import { Note, Content } from "../models";
import { NoteI, ContentI } from "../types";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get('/view', async (req, res) => {
  const note = await Note.findById("641f63a7c6ec693877879f84");
  res.send(note?.toJSON());
});

router.get('/content/:id', async (req, res) => {
  const {id} = req.params;
  const content = await Content.findById(id);
  res.send(content?.toJSON());
});

router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
});

router.post("/notes", async (req, res) => {
  const { title, from, to, content } = req.body;
  if (!title || !from || !to || !content) {
    res.status(400).send("Missing required fields");
    return;
  }
  const content_id = await Content.create(content)
    .then((content: any) => content._id)
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
    });

  Note.create({
    ...req.body,
    content: content_id,
  })
    .then((note: any) => {
      res.json(note);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
    });
});

export default router;
