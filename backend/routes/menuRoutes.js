const express = require("express");
const router = express.Router();
const { createMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } = require("../controllers/menuController");
const auth = require("../middleware/auth");

// Public
router.get("/", getMenuItems);

// Protected for Admin
router.post("/", auth, createMenuItem);
router.put("/:id", auth, updateMenuItem);
router.delete("/:id", auth, deleteMenuItem);

module.exports = router;
