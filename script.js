const keys = [
    "G2788EQ9X7BD", "N10LNWBV4XDU", "EI7PCRUOTLWE", "CVMAQQUG61HC", "CE9NN4CUW73B",
    "81QPC5MZWDT4", "4F4YLV9QVRHE", "HU4IQ2ENA32R", "INHUIA8RHORA", "AFOVGFZXFX00",
    "XZHGJZDKW6NN", "O7Y9HKV30RRF", "P5SID8PQC5FN", "ZACSRA1DB36J", "TEDUFJGNYLYJ",
    "UMO34NFWMYEK", "QYI94QJF1ZZG", "9WF2FWWMF3JJ", "AMMF68ENG2O9", "LOKCCA6UMTLQ",
    "Q1W3ZNKRSM29", "KGFU8LMN5VZK", "UN6U26CVE4DI", "OYKTXB3MQGUF", "362KIMU6NU6P",
    // Add all other keys here
];

const generateKeyButton = document.getElementById("generate-key");
const keyDisplay = document.getElementById("key-display");
const captchaInput = document.getElementById("captcha-input");
const verifyCaptchaButton = document.getElementById("verify-captcha");
const captchaText = document.getElementById("captcha-text");
const keyContainer = document.getElementById("key-container");
const captchaContainer = document.getElementById("captcha-container");
const errorDisplay = document.createElement("div");
errorDisplay.classList.add("error-message");
errorDisplay.style.display = "none"; // Initially hidden

let captchaVerified = false;

// Check if the key has been generated before (even after refresh)
if (localStorage.getItem("keyGenerated") === "true") {
    keyContainer.classList.remove("hidden");
    generateKeyButton.disabled = true;
    generateKeyButton.style.backgroundColor = "#6c757d"; // Disabled button
    errorDisplay.textContent = "You have already generated a key. Please reload the page to try again.";
    errorDisplay.style.display = "block"; // Show the error
    keyContainer.parentElement.appendChild(errorDisplay);
}

// Function to generate random key from the list
function generateKey() {
    if (localStorage.getItem("keyGenerated") === "true") {
        // If the key has already been generated, show an error
        errorDisplay.textContent = "You have already generated a key. Please reload the page to try again.";
        errorDisplay.style.display = "block"; // Show the error
        return;
    }

    const randomIndex = Math.floor(Math.random() * keys.length);
    keyDisplay.textContent = keys[randomIndex];
    
    // Mark the key as generated in localStorage
    localStorage.setItem("keyGenerated", "true");

    // Disable the button to prevent further clicks
    generateKeyButton.disabled = true;
    generateKeyButton.style.backgroundColor = "#6c757d"; // Change the button color to indicate it's disabled
}

// Bot verification
verifyCaptchaButton.addEventListener("click", () => {
    const userInput = captchaInput.value.trim();
    if (userInput.toLowerCase() === captchaText.textContent.toLowerCase()) {
        captchaVerified = true;
        captchaContainer.style.display = "none";
        keyContainer.classList.remove("hidden");
        // Insert the error display below the key container
        keyContainer.parentElement.appendChild(errorDisplay);
    } else {
        alert("Captcha verification failed. Please try again.");
    }
});

// Generate key on button click
generateKeyButton.addEventListener("click", generateKey);
