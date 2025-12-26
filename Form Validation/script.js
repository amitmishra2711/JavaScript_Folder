function validateForm() {
  let name = document.myForm.username.value;
  let password = document.myForm.password.value;

  if (name.trim() === "") {
    document.getElementById("error").innerText =
      "Name is required";
    return false;
  }

  if (password.trim() === "") {
    document.getElementById("error").innerText =
      "Password is required";
    return false; 
  }

  return true; 
}