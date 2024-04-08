// Function to check password strength
export default function checkPasswordStrength(password) {
    // Define your criteria for a strong password
    const minLength = 7;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    // Calculate strength based on criteria
    let strength = 0;
    if (password.length >= minLength) {
        strength++;
    }
    if (hasUppercase) {
        strength++;
    }
    if (hasLowercase) {
        strength++;
    }
    if (hasNumber) {
        strength++;
    }
    if (hasSpecialChar) {
        strength++;
    }

    return strength;
};