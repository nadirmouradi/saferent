import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.get('/categories', (req, res) => {
    // Fetch data from MySQL
    db.query('SELECT type FROM category', (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ error: 'Failed to retrieve data from MySQL' });
      } else {
        console.log('Retrieved data from MySQL:', results);
        const types = results.map((item) => item.type);
        res.json(types);
      }
    });
  });
  

const categoryRoutes = router;

export default categoryRoutes;