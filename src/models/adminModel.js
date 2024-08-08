const usersDatabase = require("../db");
const validators = require("../utils/validators");

const adminModel = {
  // Busca os dados de todos os usuários da aplicação
  getAllUsers: () => {
    return {
      status: true,
      code: 200,
      data: usersDatabase,
    };
  },

  // Busca os dados de um usuário em específico
  getUser: (id) => {
    // Procura o usuário pelo ID no banco de dados
    const user = validators.getIndexById(id, usersDatabase, "User not found.");
    if (!user.status) {
      return user;
    }

    return {
      status: true,
      code: 200,
      data: user.data,
    };
  },

  // Atualiza o papel de um usuário da aplicação
  updateRole: (id, role) => {
    // Verificando se o role foi enviado e se é uma string
    const roleValidation = validators.validateVariableType(
      role,
      "string",
      "The role must be a string."
    );
    if (!roleValidation.status) {
      return roleValidation;
    }

    // Verifica se o role é "standard" ou "admin"
    if (role.toLowerCase() !== "standard" && role.toLowerCase() !== "admin") {
      return {
        status: false,
        error: "Only standard and admin are valid roles.",
        code: 400,
      };
    }

    // Procura o usuário pelo ID no banco de dados
    const user = validators.getIndexById(id, usersDatabase, "User not found.");
    if (!user.status) {
      return user;
    }

    user.data.role = role.toLowerCase(); // Atualizando a função do usuário

    return {
      status: true,
      code: 200,
      message: `${user.data.username} had his role updated to ${role}.`,
    };
  },

  // Deleta um usuário da aplicação
  deleteUser: (id) => {
    // Procura o usuário pelo ID no banco de dados
    const user = validators.getIndexById(id, usersDatabase, "User not found.");
    if (!user.status) {
      return user;
    }

    // Deletando o usuário
    usersDatabase.slice(user.index, 1);

    return {
      status: true,
      code: 200,
      message: "User deleted successfully.",
    };
  },
};

module.exports = adminModel;
