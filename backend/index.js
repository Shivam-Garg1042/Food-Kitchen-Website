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
// import { Client, Databases } from "appwrite";

// const client = new Client();

// client
//     .setEndpoint("https://cloud.appwrite.io/v1")
//     .setProject("67a5a519002f7550fc51");

// const databases = new Databases(client, process.env.APPWRITE_API_KEY);

// async function getData() {
//     try {
//         let response = await databases.listDocuments("67a5ad3d00326df0c103", "67a5ad4c00392933974f");
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData();