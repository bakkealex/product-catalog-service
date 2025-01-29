require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3002;

const products = [
  { id: 0, name: "Bread" },
  { id: 1, name: "Cheese" },
  { id: 2, name: "Milk" },
]; // Mimics a database. In a real-world scenario, this would be a database.

// Add New Product Endpoint
app.post("/add-product", (req, res) => {
  const product = req.body;

  // Add the product to the array
  products.push(product);

  res.status(201).send("Product added");
});

// List Products Endpoint
app.get("/products", (req, res) => {
  res.json(products);
});

// Ping Endpoint
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Product Catalog Service running at http://localhost:${port}/`);
});
