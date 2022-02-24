// Assignment code here
// Possible characters as global variable strings
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numerical = "1234567890";
var special = "!#$%'()*+,-./:;<=>?@[]^_`{}|~";

var checkLength = function() {
  passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.")
  passLength = parseInt(passLength);
  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  } else {
    alert("You did not enter a valid number. Please try again.");
    checkLength();
  }
}

var generatePassword = function() {
  var passLength = checkLength();
  console.log(passLength);
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
