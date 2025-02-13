// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// // Import routes
// import feedbackRoutes from "./routes/feedbackRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// import connectDB from "./config/database.js";
// connectDB();

// // ESM module fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors({ origin: "*" })); // Allow all origins (adjust if needed)
// app.use(express.json()); // Parse JSON request bodies

// //  Define API routes first
// app.use("/api/feedback", feedbackRoutes);
// app.use("/api/orders", orderRoutes);
// app.get("/api/healthcheck", (req, res) => {
//   res.json({ status: "Server is running!" });
// });


// // Serve frontend (React) after API routes
// const frontendPath = path.join(__dirname, "./client/dist");
// app.use(express.static(frontendPath));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(frontendPath, "index.html"));
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Import routes
import feedbackRoutes from "./routes/feedbackRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
import connectDB from "./config/database.js";
connectDB();

// ESM module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
    origin: ["https://mamtagalley.onrender.com", "http://localhost:5000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Set security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// API Routes
const apiRouter = express.Router();

// Health check route
apiRouter.get("/healthcheck", (req, res) => {
    res.json({ status: "Server is running!", environment: process.env.NODE_ENV });
});

// Mount other API routes
apiRouter.use("/feedback", feedbackRoutes);
apiRouter.use("/orders", orderRoutes);

// Mount all API routes under /api
app.use("/api", apiRouter);

// Serve static files
const frontendPath = path.join(__dirname, "./client/dist");
app.use(express.static(frontendPath));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: process.env.NODE_ENV === 'production' 
            ? 'Internal Server Error' 
            : err.message
    });
});

// Catch-all route for the frontend
app.get("*", (req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(frontendPath, "index.html"));
    } else {
        res.status(404).json({ error: "API endpoint not found" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});