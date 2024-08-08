const adminModel = require("../models/adminModel");

const adminController = {
  // GET /api/admin
  users: (req, res) => {
    const users = adminModel.getAllUsers();
    return res.status(users.code).json({ data: users.data });
  },

  // PUT /api/admin/:id
  update: (req, res) => {
    const { id } = req.params;
    const { role } = req.body;

    const updatedRole = adminModel.updateRole(id, role);

    if (!updatedRole.status) {
      return res.status(updatedRole.code).json({ error: updatedRole.error });
    }

    res.status(updatedRole.code).json({ message: updatedRole.message });
  },

  // GET /api/admin/:id
  user: (req, res) => {
    const { id } = req.params;

    const user = adminModel.getUser(id);

    if (!user.status) {
      return res.status(user.code).json({ error: user.error });
    }

    res.status(user.code).json({ data: user.data });
  },

  // DELETE /api/admin/:id
  delete: (req, res) => {
    const { id } = req.params;

    const deletedUser = adminModel.deleteUser(id);

    if (!deletedUser.status) {
      return res.status(deletedUser.code).json({ error: deletedUser.error });
    }

    res.status(deletedUser.code).json({ message: deletedUser.message });
  },
};

module.exports = adminController;
