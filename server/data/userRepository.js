const User = require("../../Models/UserSchema");

class UserRepository {
  async create(email, password) {
    return await User.create({ email, password });
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }
}

module.exports = UserRepository;
