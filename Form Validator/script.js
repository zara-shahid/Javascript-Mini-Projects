document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const submitBtn = document.getElementById("submitBtn");
    const form = document.getElementById("myForm");

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validator() {
        if (nameInput.value === "") return false;
        if (!isValidEmail(emailInput.value)) return false;
        if (passwordInput.value === "") return false;
        if (confirmPasswordInput.value !== passwordInput.value) return false;
        return true;
    }

    // Handle form submission
    form.addEventListener("submit", function(event) {
        if (!validator()) {
            alert("Please fill out all fields correctly.");
            event.preventDefault();
        }
    });

    // Handle input border colors
    nameInput.addEventListener("input", function() {
        this.style.borderColor = this.value !== "" ? "green" : "red";
    });

    emailInput.addEventListener("input", function() {
        this.style.borderColor = isValidEmail(this.value) ? "green" : "red";
    });

    passwordInput.addEventListener("input", function() {
        this.style.borderColor = this.value !== "" ? "green" : "red";
    });

    confirmPasswordInput.addEventListener("input", function() {
        this.style.borderColor = this.value === passwordInput.value ? "green" : "red";
    });

    // Enable/disable submit button dynamically
    form.addEventListener("input", function() {
        submitBtn.disabled = !validator();
    });

    submitBtn.disabled = true; // Initially disable the submit button
});
