// Assignment Code
// var resultEl = document.querySelector("password");
// var generateBtn = document.querySelector("#generate");

// // const randomfunc = [getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol];
// function getRandomLower () {
//   const characters = "abcdefghijklmnopqrstuvwxyz";
//   return characters[Math.floor(Math.random() * characters.length)];
// };

// function getRandomUpper () {
//   const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   return upperCharacters[Math.floor(Math.random() * upperCharacters.length)];
// };

// function getRandomNumber () {
//   const numbers = "0123456789";
//   return numbers[Math.floor(Math.random() * numbers.length)];
// };

// function getRandomSymbol () {
//   const symbols = "!@#$%^&*(){}[]=<>/,.'";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// };

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };


// function isLength() {
    
//   var lengthChoice = prompt("what length would you like the password to be? enter a number.", "0");
//   lengthChoice = parseInt(lengthChoice);
//   if (!lengthChoice) {
//     return;
//   }
//   return lengthChoice;
// };

// function isLower() {
  
//   var lowerCasePrompt = prompt("Would you like lower case in your password? enter yes or no");
//   if (!lowerCasePrompt) {
//     return;
//   }
//   lowerCasePrompt = lowerCasePrompt.toUpperCase();
//   var lowerCaseChoice = (lowerCasePrompt === "YES");
  
//   return lowerCaseChoice;
// };

// function isUpper() {
  
//   var upperCasePrompt = prompt("Would you also like upper case in your password? enter yes or no.");
//   if (!upperCasePrompt) {
//     return;
//   }
//   upperCasePrompt = upperCasePrompt.toUpperCase();
//   var upperCaseChoice = (upperCasePrompt === "YES");
//   return upperCaseChoice;
// };

// function isNumber() {
  
//   var numberChoicePrompt = prompt("would you like numbers in your password? enter yes or no.");
//   if (!numberChoicePrompt) {
//     return;
//   }
//   numberChoicePrompt = numberChoicePrompt.toUpperCase();
//   var numberChoice = (numberChoicePrompt === "YES");
//   return numberChoice;
// };

// function isSymbol() {
  
//   var symbolChoicePrompt = prompt("would you like symbols in the password? enter yes or no.");
//   if (!symbolChoicePrompt) {
//     return;
//   }
//   symbolChoicePrompt = symbolChoicePrompt.toUpperCase();
//   var symbolChoice = (symbolChoicePrompt === "YES");
// return symbolChoice;
// };


// generateBtn.addEventListener("click", () => {
  
//   let generatedPassword = "";
// isLength();

//  var typesArr = [isLower(), isNumber(), isSymbol(), isUpper() ];

//  const functionToFilter = function(isTrue) {
//    return isTrue;
//  };

//  var typesArrFiltered = typesArr.filter(functionToFilter);

//  console.log(typesArrFiltered);

// for(let i = 0; i < parseInt(isLength()); i += typesArrFiltered.length) {
//   typesArrFiltered.forEach(item => {
//     const funcName = Object.values(item)[0];
//     console.log(funcName);

//     generatedPassword += randomFunc[funcName]();
//   });
// }




    
  

  
  // });




// function generatePassword(lower,upper,number,symbol,length) {
//   let generatedPassword = "";

//   const typesCount = lower + upper + number + symbol;

//   console.log(typesCount);
// }



// resultEl.innertext = generatePassword(isLower, isUpper, isNumber, isSymbol, isLength);




// var generateBtn = document.querySelector("#generate");

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

// assignment code:

var length;
var confirmNumber;
var confirmCharacter;
var confirmUpperCase;
var confirmLowercase;


// arrays containing strings that will be randomized for password making

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];


// using query selector to link button id to script and will be used to make an eventlistener
var button = document.querySelector("#generate");

// making eventlistener with 'click' 

get.addEventListener("click", function () {

});
  

// making function to create password

function createPassword () {
  // used parseInt in order to get the input from the user to be converted from a string to a number value
  length = parseInt(prompt("How many characters would you like in the password? must be between 8 and 128"));

  // using a conditional in order to make sure password length is between 8 and 120
  if(length < 8 || length > 120) {
    alert("Password must be between 8 and 120 characters");
  }

}
