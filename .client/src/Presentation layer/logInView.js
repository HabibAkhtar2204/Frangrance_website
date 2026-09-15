import { AuthService } from "../Business layer/authService.js";

const logInForm = document.getElementById("login-form");
logInForm.addEventListener("submit", handleLogIn);

const authService = new AuthService();

async function handleLogIn(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await authService.logIn(email, password);
  } catch (error) {
    alert(error.message);
  }
}
