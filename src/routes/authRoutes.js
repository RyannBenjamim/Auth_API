const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const routes = express.Router();

routes.post("/login", authController.login);
routes.post("/register", authController.register);
routes.get("/home", authMiddleware, authController.home);

module.exports = routes;
