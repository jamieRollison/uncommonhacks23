import express from "express";
import { Note, Content, Link } from "../models";
import { negativeSentiment, shortenLink } from "../utils";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/view", async (req, res) => {
  const note = await Note.findById("641f63a7c6ec693877879f84");
  res.send(note?.toJSON());
});

router.get("/content/:id", async (req, res) => {
  const { id } = req.params;
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
  console.log(req.body);
  const { title, from, to, content, font } = req.body;
  if (!title || !from || !to || !content || !font) {
    res.status(400).send("Missing required fields");
    return;
  }

  if (await negativeSentiment([content, title])) {
    console.log("Negative sentiment detected");
    res.status(401).send("Be nice! This platform is for positivity only.");
    return;
  }

  const content_id = await Content.create({
    text: content,
    font: font,
  })
    .then((content: any) => content._id)
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
      return;
    });

  console.log(content_id);

  Note.create({
    ...req.body,
    content: content_id,
  })
    .then((note: any) => {
      const { _id } = note;
      shortenLink("/api/notes/" + _id).then((short: any) => {
        console.log(short);
        res.json(short);
      });
    })
    .catch((err: any) => {
      res.status(500).send(err);
      return;
    });
});

router.get("/notes/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send("Missing required fields");
    return;
  }
  const note = await Note.findById(id);
  res.json(note);
});

router.get("/content/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send("Missing required fields");
    return;
  }
  const content = await Content.findById(id);
  res.json(content);
});

router.post("/shorten", async (req, res) => {
  const { long } = req.body;
  if (!long) {
    res.status(400).send("Missing required fields");
    return;
  }
  const short = await shortenLink(long);
  res.json(short);
});

router.get("/:short", async (req, res) => {
  const { short } = req.params;
  if (!short) {
    res.status(400).send("Missing required fields");
    return;
  }
  console.log(short);
  const long = await Link.findOne({ short })
    .then((link: any) => {
      console.log(link);
      res.redirect(link.long);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
});

export default router;
