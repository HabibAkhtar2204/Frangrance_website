export class authRepository {
  constructor() {}

  async signUp(email, password) {
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  }

  async logIn(email, password) {
    await fetch("/api/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  }
  async findByEmail() {}
}
