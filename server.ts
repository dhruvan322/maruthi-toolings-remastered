import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import process from 'process';
import { createInquiryHandler } from './server/controllers/data.controller.js';
import { connectDB } from './server/config/db.js';

// Manually define __dirname since it's not available in ESM scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startServer = async () => {
  try {
    // Load environment variables from .env file
    dotenv.config();

    // Connect to MongoDB
    await connectDB();

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middleware
    app.use(cors());
    app.use(express.json());

    // API Routes
    app.post('/api/inquiry', createInquiryHandler);

    // Serve static files from client build folder
    const clientBuildPath = path.join(__dirname, 'client');
    app.use(express.static(clientBuildPath));

    // Catch-all route to serve React app
    app.get('*', (req, res) => {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
