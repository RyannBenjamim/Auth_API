const validators = require("../utils/validators");
const usersDatabase = require("../db");
const jwt = require("jsonwebtoken");
const User = require("./entities/User");

const tokenSecretKey = process.env.JWT_KEY;

const authModel = {
  // Loga um usuário na aplicação
  login: (email, password) => {
    // Verificando se o email foi enviado e se é uma string
    const emailValidation = validators.validateVariableType(
      email,
      "string",
      "The Email must be a string."
    );
    if (!emailValidation.status) {
      return emailValidation;
    }

    // Verificando se o password foi enviado e se é uma string
    const passwordValidation = validators.validateVariableType(
      password,
      "string",
      "The password must be a string."
    );
    if (!passwordValidation.status) {
      return passwordValidation;
    }

    // Verificação das credenciais do usuário
    const user = usersDatabase.find((user) => user.email === email);
    if (!user || user.password !== password) {
      return {
        status: false,
        error: "Invalid credentials.",
        code: 401,
      };
    }

    // Criação do token JWT
    const payload = { email };
    const token = jwt.sign(payload, tokenSecretKey, {
      expiresIn: "1h",
    });

    return {
      status: true,
      code: 200,
      token,
    };
  },

  // Registra um usuário na aplicação
  register: (username, email, password) => {
    // Verificando se o username foi enviado e se é uma string
    const usernameValidation = validators.validateVariableType(
      username,
      "string",
      "The Username must be a string."
    );
    if (!usernameValidation.status) {
      return usernameValidation;
    }

    // Verificando se o email foi enviado e se é uma string
    const emailValidation = validators.validateVariableType(
      email,
      "string",
      "The Email must be a string."
    );
    if (!emailValidation.status) {
      return emailValidation;
    }

    // Verificando se o password foi enviado e se é uma string
    const passwordValidation = validators.validateVariableType(
      password,
      "string",
      "The password must be a string."
    );
    if (!passwordValidation.status) {
      return passwordValidation;
    }

    // Verificando se o email já foi cadastrado no sistema
    const user = usersDatabase.find((user) => user.email === email);
    if (user) {
      return {
        status: false,
        error: "This email has already been registered in the system.",
        code: 401,
      };
    }

    // Criando e salvando o usuário no sistema
    const newUser = new User(username, email, password);
    usersDatabase.push(newUser);

    return {
      status: true,
      code: 201,
      data: {
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      },
    };
  },
};

module.exports = authModel;
