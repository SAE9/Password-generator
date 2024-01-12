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



function isPasswordLengthSuitable(lengthOfPassword) {
  if (lengthOfPassword < 8) {
    return false;

  }

  if (lengthOfPassword > 128) {
    return false;

  }

  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    return true;
  }

  return false;

}



// Function to prompt user for password options
function getPasswordOptions() {
  console.log('Get password conditions')

  const lengthOfPassword = prompt('How long do you want your random password to be? (The length of the password should be minimum 8 characters long and maximun no more than 128 characters)') //Prompts user to decide password length to fit these options
  const lengthOfPasswordAsNumber = parseInt(lengthOfPassword, 10); //length of password before character choices

  if (isPasswordLengthSuitable(lengthOfPasswordAsNumber)) {
    const lowerCase = confirm('Do you want to include lowercase characters?')
    const upperCase = confirm('Do you want to include Uppercase characters?')
    const numerical = confirm('Do you want to include Numerical characters?')
    const specialChars = confirm('Do you want to include special characters?')
    //ask more questions to see if user says yes at least 1 
    //If user say yes continue loop but if not alert should appear telling user to pick at least 1

    const passwordOptions = {
      lengthOfPassword,
      lowerCase,
      upperCase,
      numerical,
      specialChars,



    }
    console.log(passwordOptions);



    if (lowerCase || upperCase || numerical || specialChars) {



    } else {
      alert('Choose 1 character type please')
    }

    // Generate random password based on user answers

  } else {
    alert("Password length is not valid. Please make the length a minimum of 8 and maxium of 128 characters")
  }
  // function determine if the password length meets criteria and creates alert when not met
  console.log(lengthOfPassword);

  return passwordOptions;


}





// Function for getting a random element from an array
function getRandom(arr) {
  // use math random to get random element from array if user wants lowercase,uppercase,numerical or spechial characters
  return arr[Math.floor(Math.random()*arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  console.log('Generate password')
  let finalPassword; //Allows final password to show on the textarea
  const passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
  let newPassword = [];
  let requiredCharacters = newPassword.concat(lengthOfPassword, lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters);
  console.log(requiredCharacters);
  let i = newPassword;
  for (let i = 0; i < le.length; i++) {
    if ([i] < 8) {
      add()

    }
  }

  //create a new password with one character from each userchoice of characters



  return finalPassword;


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