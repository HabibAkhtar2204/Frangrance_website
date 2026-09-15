const UserRepository = require("../data/userRepository");
const bcrypt = require("bcryptjs");

class RegistrationService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(email, plaintextPassword) {
    if (plaintextPassword.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    const hashedPassword = await bcrypt.hash(plaintextPassword, 10);
    return await this.userRepository.create(email, hashedPassword);
  }
  async logIn(email, plaintextPassword) {
    console.log("checking email");
    console.log(await this.userRepository.findByEmail(email));
  }
}

module.exports = RegistrationService;
