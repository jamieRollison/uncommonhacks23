import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import router from "./server/routes/api-router";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
