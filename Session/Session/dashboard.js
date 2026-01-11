let user = sessionStorage.getItem("loggedUser");

if (user == null) {
    window.location.href = "login.html";
} else {
    document.getElementById("welcome").innerText =
        "Welcome " + user;
}
