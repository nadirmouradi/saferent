
import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import createGig from "./routes/createGig.js";


const app = express();
app.use(cors());
app.use(express.json());



app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', createGig);


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
