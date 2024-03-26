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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
function getPasswordOptions() {
  alert("Welcome to Yaseen's Password Generator! Please choose a password length between 8 and 128 characters.");

  let chosenPasswordLength;
  do {
    chosenPasswordLength = prompt("Length of password:");
    if (chosenPasswordLength < 8 || chosenPasswordLength > 128) {
      alert("Please enter a password length between 8 and 128 characters.");
    }
  } while (chosenPasswordLength < 8 || chosenPasswordLength > 128);

  alert("Answer the prompts to customize your password:");

  let passwordSpecialCharacters = confirm("Should the password include special characters?");
  let passwordNumbers = confirm("Should the password include numbers?");
  let passwordUpper = confirm("Should the password include uppercase letters?");
  let passwordLower = confirm("Should the password include lowercase letters?");

  let allCharacters = "";

  if (passwordSpecialCharacters) {

    
    allCharacters += specialCharacters.join('');
  }
  if (passwordNumbers) {
    allCharacters += numericCharacters.join('');
  }
  if (passwordUpper) {
    allCharacters += upperCasedCharacters.join('');
  }
  if (passwordLower) {
    allCharacters += lowerCasedCharacters.join('');
  }

  return { length: chosenPasswordLength, characters: allCharacters };
}
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];

}

function generatePassword() {
  let options = getPasswordOptions();
  let password = '';

  for (let i = 0; i < options.length; i++) {
    password += getRandom(options.characters);
  }
  
  return password; 
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);