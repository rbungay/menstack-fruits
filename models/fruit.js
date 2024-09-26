import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

export default Fruit;

/* could also just do the following:

module.exports = mongoose.model("Fruit", new mongoose.Schema({
name: String,
isReadyToEat: Boolean,}))

*/
