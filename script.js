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

 

   if (lowerCase || upperCase || numerical || specialChars ) {
  //   let length = lengthOfPasswordAsNumber.length

  //   if (lowerCase && upperCase && specialChars)


      let password = "";
           // continue, to generate the password based on the user answers
            // divide the length into however many options the user chose
            // (e.g. when the user chose lowercase, uppercase and, special and length = 50, we divide Math.floor(50/3) = 16, 16 from lowercase, 16 from uppercase, 16 from special)
            // check if passwordLengthAsNumber === 16 * 3, if yes continue, if no, add the rest of the character to any one of the option, uppercase = 16 + (passwordLengthAsNumber - 16 * 3)
             //if lowerCase 

            // NEW!!!
            // Now pick 16 character from lowercase array, 16 + (passwordLengthAsNumber - 16 * 3) character from uppercasee array and 16 character from special
            // Put it into a new array, randomise the array, then convert the to a string which will be the password!
            // Then return the password, i.e.

      // if (lowerCase) password += lowerCasedCharacters;
      // if (upperCase) password += upperCasedCharacters;
      // if (numerical) password += numericCharacters;
      // if (specialChars) password += specialCharacters;
      //suppose to link and check user answers with arrays to fit into the variable of password

      // const passwordLength = password.length; // get the password length 
      // const divideLength = Math.floor(passwordLength / password.length); // divide the users answer length with the original password length


  // for (i=0; i < lengthOfPassword; i++) {
  //   password[Math.floor(Math.random()*password.length)]
  // }
      return password;
    

  } else {
    alert('Choose 1 character type please')
  }
  
  // Generate random password based on user answers

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
 const createdPassword=""; //Allows final password to show on the textarea
let test = getPasswordOptions();
console.log(test);


 return createdPassword;
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