const password = document.querySelector("input#password");
const confirm = document.querySelector("input#confirm");
const submit = document.querySelector(".submit-btn");

// Upon button press check if both passwords are identical
submit.addEventListener('click', function(e) {
    if (password.value != confirm.value) {
        e.preventDefault();
        confirm.setCustomValidity('* Passwords do not match');
        confirm.reportValidity();
    }
});
