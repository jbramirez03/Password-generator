// Assignment Code
var characters = "abcdefghijklmnopqrstuvwxyz",
    charactersnum = "0123456789",
    specialCharacters = "@!#$",
    upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


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

function generatePassword() {
var userLengthChoice = window.prompt("What length would you like your password to be? enter a numerical value");
userLengthChoice = parseInt(userLengthChoice);
var userCharChoice = window.prompt("Would you like lowercase letters in password? enter yes or no");
userCharChoice = userCharChoice.toUpperCase();
var userNumChoice = window.prompt("Would you like numbers in password? enter yes or no");
userNumChoice = userNumChoice.toUpperCase();
var userSpecialChoice = window.prompt("Would you like special characters in password? enter yes or no");
userSpecialChoice = userSpecialChoice.toUpperCase();
var userUpperChoice = window.prompt("Would you like uppercase letters in password? enter yes or no");
userUpperChoice = userUpperChoice.toUpperCase();

if (userCharChoice === "YES" && userNumChoice === "YES" && userSpecialChoice === "YES" && userUpperChoice === "YES") {
var outcome1 = characters.concat(charactersnum, specialCharacters, upperCaseCharacters);
 var password = Math.floor(Math.random()* outcome1.length);
 var finalPassword = outcome1[password];
 for (var i = 0; i < 8; i++) {
   return finalPassword;
 }
 console.log(finalPassword);
}







}
