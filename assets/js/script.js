// Assignment code here
// Password variables
var passwordLength = alert("How long would you like your password? Please enter a number between 8 and 128.");

// Assign a length for the password
var getLength = function() {
  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    //TODO MOVE ON TO NEXT FUNCTION
    console.log(passwordLength);
  } else {
    alert("That is not a valid option. Please try again.")
    getLength();
  }
}

// Using
for (var i = 0; i < length; i++) {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
