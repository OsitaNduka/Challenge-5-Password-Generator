// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


 // user input variables:
var characterLength = 8;
var choices = [];

var specialCharacters = ['@', '&', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '}', ']', ']', '~', '-', '_', '.']
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomcharcter = Math.floor(Math.random() * choices.length);
    password = password + choices[randomcharcter];
  }
  return password
} 

// Asks user for input

function getPrompts(){

    characterLength = parseInt(prompt("How many character do you want your password, choose between 10 and 64"));
    if (isNaN(characterLength) || characterLength < 10 || characterLength > 64){
       alert("Character Length must be at least 10 characters but not more than 64");
       return false;
    }
    if (confirm("Will this contain numbers?")) {
      choices = choices.concat(numericCharacters);
    }
    if (confirm("Will this contain lowercase leters")){
      choices = choices.concat(lowerCasedCharacters);
    }
    if (confirm("Will this contain uppercase letters")){
      choices = choices.concat(upperCasedCharacters);
    }
    if (confirm("Will this contain special characters")){
      choices = choices.concat(specialCharacters);
    }
    return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
   var correctPrompts = getPrompts();
   if(correctPrompts){
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
   }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);