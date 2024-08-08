const authModel = require("../models/authModel");

const authController = {
  // POST /api/auth/login
  login: (req, res) => {
    const { email, password } = req.body;

    const login = authModel.login(email, password);

    if (!login.status) {
      return res.status(login.code).json({ error: login.error });
    }

    res.status(login.code).json({ token: login.token });
  },

  // POST /api/auth/register
  register: (req, res) => {
    const { username, email, password } = req.body;

    const newUser = authModel.register(username, email, password);

    if (!newUser.status) {
      return res.status(newUser.code).json({ error: newUser.error });
    }

    res.status(newUser.code).json({ data: newUser.data });
  },

  // GET /api/auth/home
  home: (req, res) => {
    const username = req.authenticatedUser.username;
    res.status(200).json({ message: `Seja bem vindo(a) ${username}` });
  },
};

module.exports = authController;
