import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Fruit from "./models/fruit.js";
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false })); //ABSOLUTELY NEEDED WHEN EXTRACTING FORM DATA

mongoose.connect(process.env.MONGODB_URI);

app.post("/fruits", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }

  await Fruit.create(req.body);

  res.redirect("/fruits/new");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB ", mongoose.connection.name);
});

// render the index
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

// render the fruits page
app.get("/fruits", async (req, res) => {
  const allFruits = await Fruit.find();
  console.log(allFruits);
  res.render("fruits/index.ejs", { fruits: allFruits });
});

//getting fruits at new
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
