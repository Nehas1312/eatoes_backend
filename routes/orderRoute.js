import express from 'express';
import { createOrder, getOrdersByPhone } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/:phone_number', getOrdersByPhone);

export default router;
