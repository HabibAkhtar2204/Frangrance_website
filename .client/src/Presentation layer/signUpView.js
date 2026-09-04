import { authRepository } from "../Data layer/authRepository.js";

console.log("sign up view running");

const form = document.getElementById("signup-form");
const authRepo = new authRepository();
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  authRepo.signUp(email, password);
}
