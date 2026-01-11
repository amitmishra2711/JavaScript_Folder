
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let form = document.getElementById("regForm");


let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let cityError = document.getElementById("cityError");


// ===== RESTORE DATA FROM SESSION STORAGE =====
if (nameInput) nameInput.value = sessionStorage.getItem("name") || "";
if (emailInput) emailInput.value = sessionStorage.getItem("email") || "";
if (cityInput) cityInput.value = sessionStorage.getItem("city") || "";


// ===== SAVE DATA WHILE TYPING =====
if (nameInput) {

    nameInput.addEventListener("input", function () {

        sessionStorage.setItem("name", nameInput.value);

        nameError.innerText = "";
    });
}

if (emailInput) {

    emailInput.addEventListener("input", function () {

        sessionStorage.setItem("email", emailInput.value);

        emailError.innerText = "";
    });
}

if (cityInput) {
    cityInput.addEventListener("input", function () {
        sessionStorage.setItem("city", cityInput.value);
        cityError.innerText = "";
    });
}


// ===== FORM SUBMIT & VALIDATION =====
if (form) {
    form.addEventListener("submit", function (e) {

         e.preventDefault();      //Page reloads,Page reloads,Form submits,Form submits---Redirect only if valid

        let valid = true;

        
       
        if (nameInput.value.trim() === "") {
            nameError.innerText = "Name is compulsory";
            valid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.innerText = "Email is compulsory";
            valid = false;
        }

        if (cityInput.value.trim() === "") {
            cityError.innerText = "City is compulsory";
            valid = false;
        }

        if (valid) {
            window.location.href = "welcome.html";
        }
    });
}


//clear data
function clearData() {
    sessionStorage.clear();
    
    nameInput.value = "";
    emailInput.value = "";
    cityInput.value = "";
    nameError.innerText = "";
    emailError.innerText = "";
    cityError.innerText = "";
}


// // ===== SHOW DATA ON WELCOME PAGE =====
// let showName = document.getElementById("showName");
// let showEmail = document.getElementById("showEmail");
// let showCity = document.getElementById("showCity");

// if (showName) showName.innerText = sessionStorage.getItem("name") || "Not Found";
// if (showEmail) showEmail.innerText = sessionStorage.getItem("email") || "Not Found";
// if (showCity) showCity.innerText = sessionStorage.getItem("city") || "Not Found";


function logout() {
    sessionStorage.clear();
    window.location.href = "Demo2.html";
}
