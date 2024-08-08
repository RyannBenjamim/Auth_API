const adminMiddleware = (req, res, next) => {
  const user = req.authenticatedUser;

  if (user.role !== "admin") {
    return res
      .status(401)
      .json({ message: "Access denied, route for admin users only" });
  }

  next();
};

module.exports = adminMiddleware;
