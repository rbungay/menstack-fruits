import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.send("hello,friend");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
