import express from "express";

const router = express.Router();

let productList = [];

// add product
router.post("/product/add", (req, res) => {
  // extract new product from req.body
  const newProduct = req.body;

  // push new product to productList
  productList.push(newProduct);

  return res.status(201).send({ message: "Product is added successfully." });
});

// get product list
router.get("/product/list", (req, res) => {
  return res.status(200).send(productList);
});

export default router;
