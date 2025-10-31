// ============================================
// ADD THIS TO YOUR BACKEND CODE
// ============================================
// 
// STEP 1: Install CORS package in your backend project:
// npm install cors
//
// STEP 2: Add these lines to your backend server file
// (Add them AFTER importing packages, BEFORE your routes)
// ============================================

import cors from 'cors';  // Add this import at the top

// ... your existing imports ...
// import express from 'express';
// import mongoose from 'mongoose';
// etc...

const app = express();
const port = 3002;

// ⭐ ADD THIS - Enable CORS (add BEFORE app.use(express.json()))
app.use(cors({
  origin: 'http://localhost:3000',  // Your Next.js frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ... rest of your code (connectDB, routes, etc.)

// ============================================
// COMPLETE BACKEND CODE WITH CORS
// ============================================

/*
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';  // ← ADD THIS
import { createCategory, fetchCategories, getCategoryById, updateCategory, deleteCategory } from './controller/category.controller.js';
// ... other imports ...
import dotenv from 'dotenv';

dotenv.config();    
const app = express();
const port = 3002;

// ⭐ ADD CORS HERE - BEFORE express.json()
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch(err => console.error("❌ Connection error:", err));
} 

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
})

// Your routes here...
app.post("/category", createCategory)
app.get("/category", fetchCategories)
// etc...

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}!`);
});
*/

