import express from "express";
import { Note, Content, Link } from "../models";
import {shortenLink} from "../utils";
const monkeylearn = require("monkeylearn");

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
  console.log(req.body);
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

  console.log(content_id);

  Note.create({
    ...req.body,
    content: content_id,
  })
    .then((note: any) => {
      const { _id } = note;
      console.log(_id)
      shortenLink('/api/notes/'+_id).then((short: any) => {
        console.log(short);
        res.json(short);
      });
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
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

router.get("/analysis", async (req, res) => {
  const ml = new monkeylearn(process.env.AI_KEY);
  const model_id = "cl_pi3C7JiL";
  const data = ["I am neutral towards this product!"];
  const a = await ml.classifiers
    .classify(model_id, data)
    .then((analysis: any) => {
      console.log(analysis.body[0].classifications);
      return analysis.body[0].classifications[0];
    });
  res.json(a);
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
    .then((link: any) => { res.redirect(link.long)})
    .catch((err: any) => {
      res.status(500).send(err);
    });
});

export default router;
