// Assignment Code
var characters = "abcdefghijklmnopqrstuvwxyz",
    charactersnum = "0123456789",
    specialCharacters = "@!#$",
    upperCaseCharacters = characters.toUpperCase();


    // variables for random selection:
var charRandom = Math.floor(Math.random()* characters.length);
var randomChar = characters[charRandom];
var numbersRandom = Math.floor(Math.random()* charactersnum.length);
var randomNum = charactersnum[numbersRandom];
var specialCharRandom = Math.floor(Math.random()* specialCharacters.length);
var randomSpecial = specialCharacters[specialCharRandom];
var upperRandom = Math.floor(Math.random()* upperCaseCharacters.length);
var randomUpper = upperCaseCharacters[upperRandom];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


