// Assignment Code
var resultEl = document.querySelector("password");
var generateBtn = document.querySelector("#generate");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function isLength() {
    
  var lengthChoice = prompt("what length would you like the password to be? enter a number.", "0");
  lengthChoice = parseInt(lengthChoice);
  if (!lengthChoice) {
    return;
  }
  return lengthChoice;
};

function isLower() {
  
  var lowerCasePrompt = prompt("Would you like lower case in your password? enter yes or no");
  if (!lowerCasePrompt) {
    return;
  }
  lowerCasePrompt = lowerCasePrompt.toUpperCase();
  var lowerCaseChoice = (lowerCasePrompt === "YES");
  
  return lowerCaseChoice;
};

function isUpper() {
  
  var upperCasePrompt = prompt("Would you also like upper case in your password? enter yes or no.");
  if (!upperCasePrompt) {
    return;
  }
  upperCasePrompt = upperCasePrompt.toUpperCase();
  var upperCaseChoice = (upperCasePrompt === "YES");
  return upperCaseChoice;
};

function isNumber() {
  
  var numberChoicePrompt = prompt("would you like numbers in your password? enter yes or no.");
  if (!numberChoicePrompt) {
    return;
  }
  numberChoicePrompt = numberChoicePrompt.toUpperCase();
  var numberChoice = (numberChoicePrompt === "YES");
  return numberChoice;
};

function isSymbol() {
  
  var symbolChoicePrompt = prompt("would you like symbols in the password? enter yes or no.");
  if (!symbolChoicePrompt) {
    return;
  }
  symbolChoicePrompt = symbolChoicePrompt.toUpperCase();
  var symbolChoice = (symbolChoicePrompt === "YES");
return symbolChoice;
};


generateBtn.addEventListener("click", () => {
  
 



isLength();
// console.log(isLength());
 var typesarr = [isLower() ,  isNumber() ,  isSymbol() ,  isUpper() ];
 console.log(typesarr);
 
 
// function generatePassword(lower,upper,number,symbol,length) {
//   let generatedPassword = "";

//   const typesCount = lower + upper + number + symbol;

//   console.log(typesCount);
// }



// resultEl.innertext = generatePassword(isLower, isUpper, isNumber, isSymbol, isLength);

});


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
