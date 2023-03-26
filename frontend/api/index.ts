import express, {Router} from "express";

const app = express();

const router = Router();

router.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send("Hello World!");
});

app.use("/api", router);