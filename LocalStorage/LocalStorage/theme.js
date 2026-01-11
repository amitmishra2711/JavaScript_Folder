function applyTheme() {
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.style.background = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
}

function dark() {
    localStorage.setItem("theme", "dark");
    applyTheme();
}

function light() {
    localStorage.setItem("theme", "light");
    applyTheme();
}

// auto apply theme on page load
applyTheme();
