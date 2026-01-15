document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = nameInput = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (!name || !email || password.length < 6) {
    error.textContent = "Please enter valid details (Password ≥ 6 chars)";
    error.style.color = "red";
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email }));
  window.location.href = "dashboard.html";
});
