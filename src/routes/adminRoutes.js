const express = require("express");
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const routes = express.Router();

routes.get("/", authMiddleware, adminMiddleware, adminController.users);
routes.put("/:id", authMiddleware, adminMiddleware, adminController.update);
routes.get("/:id", authMiddleware, adminMiddleware, adminController.user);
routes.delete("/:id", authMiddleware, adminMiddleware, adminController.delete);

module.exports = routes;
