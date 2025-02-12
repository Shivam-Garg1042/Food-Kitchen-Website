import express from "express";

import cors from "cors";
import feedbackRoutes from './routes/feedbackRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());



// for deployment
import path from 'path';
import { fileURLToPath } from "url";

// esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'./frontend/dist'))) //////react dir path

// rest api
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./frontend/dist/index.html'));
})

import connectDB from "./config/database.js";
// MongoDB Connection
connectDB();

// Routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/orders', orderRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
