import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRoutes from './routes/menuRoute.js';
import orderRoutes from './routes/orderRoute.js';
import { connectPostgres } from './config/dbPostgres.js';

dotenv.config();
const app = express();

// CORS configuration to allow requests from Netlify (frontend URL)
const allowedOrigins = ['https://wonderful-gumdrop-b938cf.netlify.app/'];  // Replace with your actual Netlify URL

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // If you're sending cookies or other credentials, enable this
}));

app.use(express.json());

// Connect databases
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

connectPostgres();

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
