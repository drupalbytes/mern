const Menu = require("../models/Menu");

// Create menu item
exports.createMenuItem = async (req, res) => {
  try {
    const menu = new Menu(req.body);
    await menu.save();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update menu item
exports.updateMenuItem = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
