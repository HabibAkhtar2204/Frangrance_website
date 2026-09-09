const RegistrationService = require("../business/registrationService");

const registrationService = new RegistrationService();

async function registerUser(request, response) {
  const { email, password } = request.body;

  try {
    const user = await registrationService.signUp(email, password);
    console.log("User created successfully", user);
    return response.json({ status: "ok" });
  } catch (error) {
    console.log(error.message);
    return response.status(400).json({ status: "error", message: error.message });
  }
}

module.exports = { registerUser };
