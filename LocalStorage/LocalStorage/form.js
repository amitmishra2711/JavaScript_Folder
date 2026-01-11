function validate() {

    let fullName = document.getElementById("fullname").value
        .trim().replace(/\s+/g, " ");
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    let isValid = true;

  
    if (fullName === "") {
        document.getElementById("nameError").innerText = "Name is compulsory";
        isValid = false;
    } else if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(fullName)) {
        document.getElementById("nameError").innerText =
            "Only letters and spaces allowed";
        isValid = false;
    }

    
    if (age === "") {
        document.getElementById("ageError").innerText = "Select Age";
        isValid = false;
    } else if (age < 18) {
        document.getElementById("ageError").innerText =
            "Age must be 18 or above";
        isValid = false;
    }

 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is compulsory";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email";
        isValid = false;
    }


    if (isValid) {
        saveFormData();
    }

    return false; // stop page reload
}

      

function saveFormData() {

    let user = {
        fullname: document.getElementById("fullname").value.trim(),
        age: document.getElementById("age").value,
        email: document.getElementById("email").value.trim()
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));


    localStorage.removeItem("fullname_draft");
    localStorage.removeItem("age_draft");
    localStorage.removeItem("email_draft");

  
    document.getElementById("fullname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";

    alert("Form submitted successfully!");
}



window.onload = function () {

    let fields = ["fullname", "age", "email"];

    fields.forEach(id => {

        let el = document.getElementById(id);

        if (el) {
            // restore draft
            el.value = localStorage.getItem(id + "_draft") || "";

            // save while typing
            el.addEventListener("input", () => {
                localStorage.setItem(id + "_draft", el.value);
            });
        }
    });
};
