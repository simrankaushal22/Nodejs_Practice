

import express from "express";
import form1 from "../html/form1.js";

const app = express();

app.get("/", (req, res) => {
  res.send(form1());
});

app.post("/submit", (req, res) => {
  res.send("Form submitted successfully");
});

app.listen(3400);