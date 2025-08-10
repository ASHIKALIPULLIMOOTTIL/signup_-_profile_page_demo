const signupForm = document.getElementById('signupForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        confirmPasswordInput.style.borderBottom = "2px solid red";
        return;
    }

    alert("Sign Up Successful!");
    this.reset();
    confirmPasswordInput.style.borderBottom = "2px solid #fff"; // reset border
});

// Real-time check
confirmPasswordInput.addEventListener('input', function() {
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        confirmPasswordInput.style.borderBottom = "2px solid red";
    } else {
        confirmPasswordInput.style.borderBottom = "2px solid limegreen";
    }
});

