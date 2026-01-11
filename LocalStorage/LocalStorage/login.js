function login() {
    
    let user = document.getElementById("username").value;
    let remember = document.getElementById("remember").checked;

    if (remember) {
        localStorage.setItem("user", user);
    }
}
