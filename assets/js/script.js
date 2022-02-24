// Assignment code here
// Possible characters as global variable strings
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numerical = "1234567890";
var special = "!#$%'()*+,-./:;<=>?@[]^_`{}|~";

// gets desired length of password - must be between 8 & 128 characters
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

// generates the password
var generatePassword = function() {
  var passLength = checkLength();
  console.log(passLength);
  var useUpper = confirm("Would you like to use uppercase letters? Press OK for yes.");
  var useLower = confirm("Would you like to use lowercase letters?");
  var useNumber = confirm("Would you like to use numbers?");
  var useSpecial = confirm("Would you like to use special characters?");

  if (!useUpper && !useLower && !useNumber && !useSpecial) {
    alert("You need to have at least one kind of character! Please try again.");
    generatePassword();
  }

  //using length of password, generates new characters
  for (i = 0; i < passLength; i++) {
    var choiceNumber = Math.floor(Math.random() * 4);

    // checks each character type for valid use
    if (useUpper && choiceNumber == 0) {
      console.log("upper");
    } else if (useLower && choiceNumber == 1) {
      console.log("lower");
    } else if (useNumber && choiceNumber == 2) {
      console.log("number");
    } else if (useSpecial && choiceNumber == 3) {
      console.log("special");
    } else {
      i--;
    }


  }
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
