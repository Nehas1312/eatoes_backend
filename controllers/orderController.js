import { pool } from '../config/dbPostgres.js';

// Place a new order
export const createOrder = async (req, res) => {
  try {
    const { customer_name, phone_number, cart_items } = req.body;

    if (!customer_name || !phone_number || !cart_items) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const query = `
      INSERT INTO orders (customer_name, phone_number, cart_data)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [customer_name, phone_number, JSON.stringify(cart_items)];

    const result = await pool.query(query, values);

    res.status(201).json({ message: 'Order placed successfully', order: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
};

// Fetch orders by phone number
export const getOrdersByPhone = async (req, res) => {
  try {
    const { phone_number } = req.params;

    const query = `
      SELECT * FROM orders
      WHERE phone_number = $1
      ORDER BY created_at DESC;
    `;
    const values = [phone_number];

    const result = await pool.query(query, values);

    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};
