document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const strengthBar = document.getElementById("strength-bar");
  const strengthText = document.getElementById("strength-text");
  const strengthLevel = document.getElementById("strength-level");

  const evaluateStrength = (password) => {
    let strength = 0;
    const length = password.length;

    // Check for length
    if (length > 8) strength += 1;
    if (length > 12) strength += 1;
    if (length > 16) strength += 1;

    // Check for character variety
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letters
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letters
    if (/[0-9]/.test(password)) strength += 1; // Numbers
    if (/[\W_]/.test(password)) strength += 1; // Special characters

    // Check for common patterns (e.g., "1234", "password")
    if (/1234|password|qwerty/i.test(password)) strength -= 1;

    // Determine strength level
    if (strength <= 2) {
      strengthBar.className = "strength-bar strength-weak";
      strengthText.textContent = "Password Strength: Weak";
      strengthLevel.textContent = "Weak";
    } else if (strength <= 4) {
      strengthBar.className = "strength-bar strength-medium";
      strengthText.textContent = "Password Strength: Medium";
      strengthLevel.textContent = "Medium";
    } else {
      strengthBar.className = "strength-bar strength-strong";
      strengthText.textContent = "Password Strength: Strong";
      strengthLevel.textContent = "Strong";
    }
  };

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    evaluateStrength(password);
  });
});
