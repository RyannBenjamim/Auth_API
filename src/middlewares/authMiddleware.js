const jwt = require("jsonwebtoken");
const usersDatabase = require("../db");

const tokenSecretKey = process.env.JWT_KEY;

const authMiddleware = (req, res, next) => {
  const isAuthenticated = req.headers.authorization;

  if (!isAuthenticated) {
    return res.status(401).json({ message: "Authorization header required" });
  }

  const token = isAuthenticated.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, tokenSecretKey);

    const user = usersDatabase.find(
      (user) => user.email === decodedToken.email
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid user token." });
    }

    req.authenticatedUser = user;

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid Token", error: error.message });
  }
};

module.exports = authMiddleware;
