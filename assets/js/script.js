// Assignment code here
// Possible characters as global variable strings
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numerical = "1234567890";
var special = "!#$%'()*+,-./:;<=>?@[]^_`{}|~";

// gets desired length of password - must be between 8 & 128 characters
var checkLength = function() {
  var passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.")
  passLength = parseInt(passLength);
  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  } else {
    alert("You did not enter a valid number. Please try again.");
    return checkLength();
  }
}

// generates the password
var generatePassword = function() {
  var passwordLength = checkLength();
  // asks whether to use each type of character
  var useUpper = confirm("Would you like to use uppercase letters? Press OK for yes.");
  var useLower = confirm("Would you like to use lowercase letters?");
  var useNumber = confirm("Would you like to use numbers?");
  var useSpecial = confirm("Would you like to use special characters?");
  //empty array to store password
  var passwordArray = [];

  //verifies that at least one character type is chosen
  if (!useUpper && !useLower && !useNumber && !useSpecial) {
    alert("You need to have at least one kind of character! Please try again.");
    return generatePassword();
  }

  //using length of password, generates new characters
  for (i = 0; i < passwordLength; i++) {
    var choiceNumber = Math.floor(Math.random() * 4);
    var newCharacter = "";

    // checks each character type for valid use
    if (useUpper && choiceNumber == 0) {
      // chooses random index number of upper & uses that character for new character
      var newCharacterIndex = Math.floor(Math.random() * 26);
      newCharacter = upper[newCharacterIndex];
      // push character to array
      passwordArray.push(newCharacter);
    } else if (useLower && choiceNumber == 1) {
      // chooses random index number of lower to use that character
      var newCharacterIndex = Math.floor(Math.random() * 26);
      newCharacter = lower[newCharacterIndex];
      //pushes character to the password array
      passwordArray.push(newCharacter);
    } else if (useNumber && choiceNumber == 2) {
      // chooses random index number of numerical to use that character
      var newCharacterIndex = Math.floor(Math.random() * 10);
      newCharacter = numerical[newCharacterIndex];
      // push character to array
      passwordArray.push(newCharacter);
    } else if (useSpecial && choiceNumber == 3) {
      // chooses random index number of special to use that character
      var newCharacterIndex = Math.floor(Math.random() * 29);
      newCharacter = special[newCharacterIndex];
      //push character to array
      passwordArray.push(newCharacter);
    } else {
      //if random number did not match an acceptable character type, ensure pw length is unaffected
      i--;
    }
  }

  //join the array into an uninterrupted string
  var password = passwordArray.join("");
  //returns string to the write passsword function
  return password;
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
