import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import data from "./database.js";
dotenv.config();

const app = express();

app.use(
  bodyParser.json({
    type: function () {
      return true;
    },
  })
);

app.get("/", (req, res) => {
  res.send(`artsyKidsBackend`);
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on ${process.env.PORT}`);
});
