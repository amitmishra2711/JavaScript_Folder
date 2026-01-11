// sessionStorage.setItem("name","rashmika");
// sessionStorage.setItem("age",23);
// sessionStorage.setItem("marks",50);

// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.removeItem("name"));
// console.log(sessionStorage.clear());


const setBtn = document.getElementById("setBtn");
const getBtn = document.getElementById("getBtn");
const removeBtn = document.getElementById("removeBtn");
const result = document.getElementById("result");

function setItemHandler() {
    const key = document.getElementById("nameInp").value;
    const value = document.getElementById("emailInp").value;

    if (key && value) {
        sessionStorage.setItem(key, value);
        result.innerHTML = "<span style='color:green'>Item stored successfully</span>";
    } else {
        result.innerHTML = "<span style='color:red'>Input fields cannot be empty</span>";
    }
}

function getItemHandler() {
    const key = document.getElementById("nameInp").value;

    if (key) {
        const value = sessionStorage.getItem(key);

        if (value !== null) {
            result.innerHTML = `<span style='color:green'>Stored Value: ${value}</span>`;
        } else {
            result.innerHTML = "<span style='color:red'>No data found</span>";
        }
    } else {
        result.innerHTML = "<span style='color:red'>Enter a key first</span>";
    }
}

function removeItemHandler() {
    const key = document.getElementById("nameInp").value;

    if (key) {
        sessionStorage.removeItem(key);
        
        result.innerHTML = "<span style='color:green'>Item removed successfully</span>";
    } else {
        result.innerHTML = "<span style='color:red'>Enter a key to remove</span>";
    }
}

function clearSession(){
    sessionStorage.clear();
}

setBtn.addEventListener("click", setItemHandler);
getBtn.addEventListener("click", getItemHandler);
removeBtn.addEventListener("click", removeItemHandler);
clearBtn.addEventListener("click", clearSession);
