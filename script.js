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


//Generate a password when the button is clicked
//Present a series of prompts for password criteria
//Length of password
//At least 8 characters but no more than 128.
//Character types
//Lowercase
//Uppercase
//Numeric
//Special characters ($@%&*, etc)
//Code should validate for each input and at least one character type should be selected
//Once prompts are answered then the password should be generated and displayed in an alert or written to the page//

function isPasswordLengthSuitable (lengthOfPassword) {
  if (lengthOfPassword < 8)  {
    return false;

  }

  if (lengthOfPassword > 128 ) {
    return false;

  }

  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    return true;
  }

  return false;

  function lowerCase(includeLowercase) {
    if (includeLowercase === true) {

    }
  }

}



// Function to prompt user for password options
function getPasswordOptions() {
console.log('Get password conditions') 

const lengthOfPassword = prompt('How long do you want your random password to be? (The length of the password should be minimum 8 characters long and maximun no more than 128 characters)') //Prompts user to decide password length to fit these options
const lengthOfPasswordAsNumber = parseInt(lengthOfPassword, 10);

if (isPasswordLengthSuitable(lengthOfPasswordAsNumber)) {
  const isincludedLowerCase = confirm('Do you want to include lowercase characters?')
  //ask more questions to see if user says yes

} else {
  alert("Password length is not valid. Please make the length a minimum of 8 and maxium of 128 characters")
}
// function determine if the password length meets criteria and creates alert when not met


console.log (lengthOfPassword);





}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  console.log('Generate password')
let createdpassword; //Allows final password to show on the textarea
getPasswordOptions(); 



 return createdpassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);