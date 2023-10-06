import express from "express";
import { db } from "../db.js";
const router = express.Router();



router.post("/products", async (req, res) => {
  try {
    // Retrieve product data from request body
    const { title, description, price, quantity, city } = req.body;

    // Insert the product data into the database
    const insertProductQuery =
      "INSERT INTO product (`nameProduct`, `description`, `price`, `numberAvailable`, `city`) VALUES (?, ?, ?, ?, ?)";
    db.query(
      insertProductQuery,
      [title, description, price, quantity, city],
      (err, result) => {
        if (err) {
          // Error occurred while inserting product
          console.error("Error inserting product:", err);
          res.status(500).send("Error inserting product");
        } else {
          // Product inserted successfully
          console.log("Product inserted:", result);
          res.status(200).send("Product inserted successfully");
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

const createGig = router;

export default createGig;