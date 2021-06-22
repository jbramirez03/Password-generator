// Assignment Code
var lowerCaseChoice = (lowerCasePrompt === "YES");
var lowerCasePrompt = window.prompt("Would you like lower case in your password? enter yes or no");

var upperCaseChoice = (upperCasePrompt === "YES");  
var upperCasePrompt = window.prompt("Would you also like upper case in your password? enter yes or no.");

var numberChoice = (numberChoicePrompt === "YES");
var numberChoicePrompt = window.prompt("would you like numbers in your password? enter yes or no.");

var symbolChoice = (symbolChoice === "YES");
var symbolChoicePrompt = window.prompt("would you like symbols in the password? enter yes or no.");

var psLength = parseInt(lengthChoice, 10);
var lengthChoice = window.prompt("what length would you like the password to be? enter a number.");


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", () => {
  
  var length = parseInt(lengthChoice);
  var lowerCaseChoice = (lowerCasePrompt === "YES");
  var upperCaseChoice = (upperCasePrompt === "YES");
  var numberChoice = (numberChoicePrompt === "YES");
  var symbolChoice = (symbolChoice === "YES");
  var lengthChoice = prompt("what length would you like the password to be? enter a number.", "0");
  var lowerCasePrompt = prompt("Would you like lower case in your password? enter yes or no");





});


var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generatePassword() {}


// generator functions
function getRandomLower () {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomUpper () {
  const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCharacters[Math.floor(Math.random() * upperCharacters.length)];
}

function getRandomNumber () {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol () {
  const symbols = "!@#$%^&*(){}[]=<>/,.'";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
