import { AuthService } from "../Business layer/authService.js";

const form = document.getElementById("signup-form");
const authService = new AuthService();
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await authService.signUp(email, password);
  } catch (error) {
    alert(error.message);
  }
}
