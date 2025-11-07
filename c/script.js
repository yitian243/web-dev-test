// hardcoded users
const validUsers = {
  "test@example.com": "Test@1234",
  "user@demo.com": "Demo@2025"
};


const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginContainer = document.getElementById("login-container");
const welcomeContainer = document.getElementById("welcome-container");
const welcomeMessage = document.getElementById("welcome-message");
const logoutBtn = document.getElementById("logout-btn");

function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/;
  return regex.test(password);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailError.textContent = "";
  passwordError.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate email
  if (email === "") {
    emailError.textContent = "Email is required.";
    return;
  }
  if (!validUsers[email]) {
    emailError.textContent = "Email does not exist.";
    return;
  }

  // Validate password
  if (!isValidPassword(password)) {
    passwordError.textContent =
      "Password must be 8–16 chars, include uppercase, lowercase, number, and symbol.";
    return;
  }

  // Check credentials
  if (validUsers[email] !== password) {
    passwordError.textContent = "Incorrect password.";
    return;
  }

  // Successful login
  loginContainer.style.display = "none";
  welcomeContainer.style.display = "block";
  welcomeMessage.textContent = `Welcome, ${email}!`;
});

logoutBtn.addEventListener("click", () => {
  welcomeContainer.style.display = "none";
  loginContainer.style.display = "block";
  form.reset();
});
