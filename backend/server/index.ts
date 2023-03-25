import express from "express";
import dotenv from "dotenv";

import router from "./routes/api-router";
dotenv.config();
const app = express();

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});