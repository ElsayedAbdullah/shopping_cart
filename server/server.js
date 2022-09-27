const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const connnectionString = "mongodb://localhost/react-shopping-cart";
mongoose.connect(connnectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => console.log("Connection Successfully"));

// model
const Product = mongoose.model(
  "product",
  new mongoose.Schema({
    id: String,
    name: String,
    desc: String,
    imageUrl: String,
    price: Number,
    sizes: [String]
  })
);

// requests
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

app.listen(5000, ()=> {
  console.log("Running on 5000");
})
