import MenuItem from "../models/menuItem.js";  

// Fetch all menu items
export const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu items', error });
  }
};

// Fetch menu items by category
export const getMenuItemsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const items = await MenuItem.find({ category });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu items by category', error });
  }
};
