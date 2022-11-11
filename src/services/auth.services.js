const Users = require("../models/users.models");
const bcrypt = require('bcrypt');

class AuthService {
  static async login(email, password) {
    try {
      const result = await Users.findOne({
        where: { email }
      });
      const isValid = bcrypt.compareSync(password, result.password);
      return isValid;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;