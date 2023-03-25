import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/api-router";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const url = process.env.MONGO_URI as string;
console.log(url);
mongoose.connect(url).then(() => {
  console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log(err);
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});