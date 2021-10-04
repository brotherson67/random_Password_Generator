// Assignment code here

//function to create password length prompt
let passLength = function() {
    const charNum = window.prompt("Please enter the desired length of you password (req. 8 - 128 characters).");
    if (charNum < 8) {
        window.alert("Your password was too short, please try again");
    } else if (charNum > 128) {
        window.alert("Your password is too long, please try again");
    // } else if ((typeof charNum) !== ) {
    //     window.alert("You entered an invalid input, please try again");
    } else {
        console.log(charNum);  //number of times loop will happen
    }
};

//function to enable lowercase
let lowerIncluded = function() {
    const included = window.prompt("Do you want lowercase letters included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};

// function to enable uppercase
let upperIncluded = function() {
    const included = window.prompt("Do you want uppercase letters included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};

//function to enable symbols
let symbolsIncluded = function() {
    const included = window.prompt("Do you want special characters included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};

//function to enable numbers
let numbersIncluded = function() {
    const included = window.prompt("Do you want numbers to be included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};


// passLength();
// lowerIncluded();
// upperIncluded();
// symbolsIncluded();
// numbersIncluded();


//array of characters
//can merge arrays later?
const lowerArray = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numberArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const symbolArray = [33,34,35, 36, 37, 38, 39, 40, 52, 42, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];
//make master array, if characters are included or not
// can merge master array by using [].concat(array) (I found this on https://dmitripavlutin.com/javascript-merge-arrays/)
let masterArray = []
const concateMasterArray = function(lowerIncluded, upperIncluded, symbolsIncluded, numbersIncluded, masterArray) {
    if (lowerIncluded) {masterArray = masterArray.concat(lowerArray)};
    if (upperIncluded) {masterArray = masterArray.concat(upperArray)};
    if (symbolsIncluded) {masterArray = masterArray.concat(symbolArray)};
    if (numbersIncluded) {masterArray = masterArray.push(numberArray)
        console.log(masterArray);};
        console.log(masterArray);
};

console.log(masterArray);

// number generator 
let charGenerator = function() {
    const initNumber = Math.random;
    let multipyNumber = initNumber * masterArray.length //array - make array now;
    multiplyNumber = Math.floor(multipyNumber);
    const randCharacter = String.fromCharCode(multipyNumber)  //found this command on https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
    console.log(randCharacter);
}

let generatePassword = function(charGenerator) {
    lowerIncluded();
    upperIncluded();
    symbolsIncluded();
    numbersIncluded();
    console.log("HELLO WORLD")
    concateMasterArray();
    for(let i = 0; i < passLength; i++){
        let finalCode = [].concat(charGenerator);
        finalCode = String.finalCode
        console.log(finalCode);
    }
};

generatePassword();
/*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
When the button is selected, writePassword is activated
> writePassword sets var(password) = generatePassword
> generatePassword needs to loop through the number of characters in the passwrod
> 
*/


/*
When I select the 'Generate Password" button 
  Prompts appear
    prompt for password criteria
      length (8 <= x <= 128) - slide box? or input
      character symbols - checkbox
      cheracter numbers - checkbox
      character lowercase - checkbox
      character capitals - checkbox
  at least one box needs to be checked\
  prompts need to be answered 
    (could these be criteria in divs?)
  Password is generated to an alert or to the page itself
    put it in an alert first to get it done
    after that mess with the page to get it to display in place of the 'your secure password'


    to generate the password I can use ASC symbols

*/



