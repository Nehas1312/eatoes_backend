import express from 'express';
import { getAllMenuItems, getMenuItemsByCategory } from '../controllers/menuController.js';

const router = express.Router();

router.get('/', getAllMenuItems);
router.get('/:category', getMenuItemsByCategory);  // Optional: Get by category

export default router;
