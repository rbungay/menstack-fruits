import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Fruit from "./models/fruit.js";
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB ", mongoose.connection.name);
});

// render the index
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

//getting fruits at new
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
