const form = document.querySelector("#form")
const errorDiv = document.querySelector("#show-error")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const repeatPassword = document.querySelector("#repeatPassword")

form.addEventListener("submit", (error) => {
    let incorrectValues = ""

    const passwordIncludesDigit = /\d/.test(password.value);
    if (!passwordIncludesDigit) {
        incorrectValues += "Password must include at least one digit. \n"
    }
    
    const badPasswordLength = (password.value.length < 8 || password.value.length > 20);
    if (badPasswordLength) {
        incorrectValues += ' The password should be within 8 to 20 characters.\n';
    }
    
    const passwordIncludesUppercase = /[a-z]/.test(password.value); 
    if (!passwordIncludesUppercase) {
        incorrectValues += ' The password should contain at least one uppercase character.\n';
    }
    
    if (password.value !== repeatPassword.value) {
        incorrectValues += 'The passwords do not match.\n';
    }
    
    if (incorrectValues !== "") {
        errorDiv.innerText = incorrectValues; 
        errorDiv.style.color = 'red'; 
        error.preventDefault(); 
    }
})