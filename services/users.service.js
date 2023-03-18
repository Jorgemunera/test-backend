const boom = require('@hapi/boom');
const usersModel = require('../db/models/users.model');

class UsersService {
  constructor() {

  }

  async getUsers() {
    const users = await usersModel.find();
    return users;
  }

  async createUser(data) {
    const newUser = await usersModel.create(data);
    return newUser;
  }

  async deleteUser(id) {
    const rta = await usersModel.findByIdAndRemove(id);
    if (!rta) {
      throw boom.notFound('User no encontrado');
    }
    return { id };
  }

  async findByEmail(email) {
    const user = await usersModel.findOne({ email });
    return user;
  }
}

module.exports = UsersService;
