function validateForm() {
    let isValid = true;

    const inputs = document.querySelectorAll("#regForm input, #regForm select");
    const name = document.getElementById("name");
    const dob = document.getElementById("dob");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const pass = document.getElementById("pass");
    const cpass = document.getElementById("cpass");
    const mobile = document.getElementById("mobile");
    const country = document.getElementById("country");
    const skills = document.querySelectorAll(".skill:checked");
    const exp = document.getElementById("exp");
    const salary = document.getElementById("salary");
    const terms = document.getElementById("terms");
    const success = document.getElementById("successMsg");

    // reset borders before validation
    inputs.forEach(i => i.classList.remove("invalid", "valid"));

    // Full Name
    const nameRegex = /^[A-Za-z ]+$/;
    if(name.value.trim() === "" || !nameRegex.test(name.value)){
        document.getElementById("nameError").innerText = "Enter valid name (alphabets only)";
        name.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
        name.classList.add("valid");
    }

    // DOB + Age
    if(dob.value === ""){
        document.getElementById("dobError").innerText = "Select DOB";
        dob.classList.add("invalid");
        isValid = false;
    } else {
        let age = new Date().getFullYear() - new Date(dob.value).getFullYear();
        if(age < 18){
            document.getElementById("dobError").innerText = "Age must be 18+";
            dob.classList.add("invalid");
            isValid = false;
        } else {
            document.getElementById("dobError").innerText = "";
            dob.classList.add("valid");
        }
    }

    // Gender
    if(!document.querySelector('input[name="gender"]:checked')){
        document.getElementById("genderError").innerText = "Select gender";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    // Email
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if(!emailRegex.test(email.value)){
        document.getElementById("emailError").innerText = "Enter valid email";
        email.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
        email.classList.add("valid");
    }

    // Username
    if(username.value.length < 5 || /[^A-Za-z0-9]/.test(username.value)){
        document.getElementById("userError").innerText = "Min 5 chars, no special symbols";
        username.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("userError").innerText = "";
        username.classList.add("valid");
    }

    // Password
    if(pass.value.length < 6 || !/[A-Z]/.test(pass.value) || !/[0-9]/.test(pass.value) || !/[@$!%*?&]/.test(pass.value)){
        document.getElementById("passError").innerText = "Weak password!";
        pass.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("passError").innerText = "";
        pass.classList.add("valid");
    }

    // Confirm Password
    if(cpass.value !== pass.value || cpass.value === ""){
        document.getElementById("cpassError").innerText = "Password not matched!";
        cpass.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("cpassError").innerText = "";
        cpass.classList.add("valid");
    }

    if(!/^[0-9]{10}$/.test(mobile.value)){
        document.getElementById("mobileError").innerText = "Enter 10 digit mobile";
        mobile.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("mobileError").innerText = "";
        mobile.classList.add("valid");
    }

    if(country.value === ""){
        document.getElementById("countryError").innerText = "Select country";
        country.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("countryError").innerText = "";
        country.classList.add("valid");
    }

    if(skills.length < 2){
        document.getElementById("skillError").innerText = "Select at least 2 skills";
        isValid = false;
    } else {
        document.getElementById("skillError").innerText = "";
    }

    if(exp.value === ""){
        document.getElementById("expError").innerText = "Select experience";
        exp.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("expError").innerText = "";
        exp.classList.add("valid");
    }

    if(isNaN(salary.value) || Number(salary.value) <= 0){
        document.getElementById("salaryError").innerText = "Enter valid salary";
        salary.classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("salaryError").innerText = "";
        salary.classList.add("valid");
    }

    // Terms
    if(!terms.checked){
        document.getElementById("termsError").innerText = "You must agree!";
        isValid = false;
    } else {
        document.getElementById("termsError").innerText = "";
    }

    // Success Message
    if(isValid){
        success.innerText = "🎉 Registration Successful!";
    } else {
        success.innerText = "";
    }

    return isValid;
}
