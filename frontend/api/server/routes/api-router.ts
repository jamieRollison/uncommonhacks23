import express from "express";
import { Note, Content, Link } from "../models";
import { negativeSentiment, shortenLink, getNote, connectDB } from "../utils";

const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send("Hello World!");
});

router.get("/content/:id", async (req, res) => {
  await connectDB();
  const { id } = req.params;
  const content = await Content.findById(id);
  res.send(content?.toJSON());
});

router.get("/notes", async (req, res) => {
  await connectDB();
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/notes", async (req, res) => {
  await connectDB();
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
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
      shortenLink(_id).then((short: any) => {
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
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const { id } = req.params;
  if (!id) {
    res.status(400).send("Missing required fields");
    return;
  }
  const note = await getNote(id);
  res.json(note);
});

router.get("/content/:id", async (req, res) => {
  await connectDB();
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const { id } = req.params;
  if (!id) {
    res.status(400).send("Missing required fields");
    return;
  }
  const content = await Content.findById(id);
  res.json(content);
});

router.post("/shorten", async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const { long } = req.body;
  if (!long) {
    res.status(400).send("Missing required fields");
    return;
  }
  const short = await shortenLink(long);
  res.json(short);
});

router.get("/:short", async (req, res) => {
  await connectDB();
  console.log("short")
  
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const { short } = req.params;
  if (!short) {
    res.status(400).send("Missing required fields");
    return;
  }
  console.log(short);
  const full = await Link.findOne({ short })
    .then(async (link: any) => 
      link.long
    )
    .catch((err: any) => {
      res.status(500).send(err);
    });
    console.log(full)
    return await getNote(full);
});

export default router;
