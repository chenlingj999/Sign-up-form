const password = document.querySelector("input#pass");
const confirm = document.querySelector("input#confirm");
const error = document.querySelector("p.error");

// Upon button press check if both passwords are identical
confirm.addEventListener('input', () => {
    if (password.value !== confirm.value) {
        confirm.classList.add("invalid");
        password.classList.add("invalid");
        error.innerText = "* Passwords do not match"
    } else {
        confirm.classList.remove("invalid");
        password.classList.remove("invalid");
        error.innerText = ""
    }
});
