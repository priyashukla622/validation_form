
const form = document.getElementById("registrationForm");
const countrySelect = document.getElementById("country");
const countryError = document.getElementById("CountryError");
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const option = document.createElement("option");
            option.value = country.name.common;
            option.textContent = country.name.common;
            countrySelect.appendChild(option);
        });
    })
    .catch(error => console.error("Error fetching country data:", error));
function validateform() {
    const fullname = document.getElementById("fullnameInput").value;
    const email = document.getElementById("Emailinput").value;
    const Password = document.getElementById("Passwordinput").value;
    const ConfirmPassword = document.getElementById("ConfirmPasswordinput").value;
    const Age = document.getElementById("Ageinput").value;
    const maleGenderInput = document.getElementById("MaleGenderInput");
    const femaleGenderInput = document.getElementById("FemaleGenderInput");
    const otherGenderInput = document.getElementById("OtherGenderInput");
    const interestsInputs = document.querySelectorAll('input[name="Interests"]:checked');

    const fullnameError = document.getElementById("fullnameError");
    const emailError = document.getElementById("emailError");
    const PasswordError = document.getElementById("PasswordError");
    const ConfirmPasswordError = document.getElementById("ConfirmPasswordError");
    const AgeError = document.getElementById("AgeError");
    const GenderError = document.getElementById("GenderError");
    const interestsError = document.getElementById("Interestserror");

    // Clear previous error messages
    
    fullnameError.textContent = "";
    emailError.textContent = "";
    PasswordError.textContent = "";
    ConfirmPasswordError.textContent = "";
    AgeError.textContent = "";
    GenderError.textContent = "";
    interestsError.textContent = "";

    if (fullname === "") {
        fullnameError.textContent = "Please fill the name";
        return false;
    }
    if (email === "") {
        emailError.textContent = "Please fill the email";
        return false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email";
        return false;
    }
    if (Password === "") {
        PasswordError.textContent = "Please fill the password";
        return false;
    }
    if (ConfirmPassword === "") {
        ConfirmPasswordError.textContent = "Please fill the Confirm password";
        return false;
    }
    if (Password !== ConfirmPassword) {
        ConfirmPasswordError.textContent = "Passwords do not match";
        return false;
    }
    if (Age === "") {
        AgeError.textContent = "Please fill the Age";
        return false;
    }
    if (!maleGenderInput.checked && !femaleGenderInput.checked && !otherGenderInput.checked) {
        GenderError.textContent = "Please select a gender";
        return false;
    }
    if (interestsInputs.length === 0) {
        interestsError.textContent = "Please select at least one interest";
        return false;
    }
    const selectedCountry = countrySelect.value;
    if (selectedCountry === "") {
        countryError.textContent = "Please select a country";
        return false;
    }

    // Other field validations...

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}   