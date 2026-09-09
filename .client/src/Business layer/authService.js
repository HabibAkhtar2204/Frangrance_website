import { authRepository } from "../Data layer/authRepository.js";

export class AuthService {
  constructor() {
    this.authRepository = new authRepository();
  }

  async signUp(email, password) {
    if (!email || email.trim() === "") {
      throw new Error("Email is required");
    }
    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }
    return await this.authRepository.signUp(email, password);
  }
}
