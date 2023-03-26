import express from "express";
import { Note, Content } from "../models";
import { NoteI, ContentI } from "../types";

const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send("Hello World!");
});

router.get("/notes", async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
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
