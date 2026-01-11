function login() {
    let user = document.getElementById("username").value;

    sessionStorage.setItem("loggedUser", user);
    window.location.href = "dashboard.html";
}
