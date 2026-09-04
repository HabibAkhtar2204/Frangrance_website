export class authRepository {
  constructor() {}

  async signUp(email, password) {
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
    console.log(result);
  }
}
