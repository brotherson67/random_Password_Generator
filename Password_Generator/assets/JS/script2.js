// SET VARIABLES
let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
const body = document.querySelector("body");
const charNum = document.getElementById("charNum");
const lowerArray = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numberArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const symbolArray = [33,34,35, 36, 37, 38, 39, 40, 52, 42, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];
let masterArray = [];
// ==============================================

// ___________
console.dir(upperCase);

// _________________

// FUNCTIONS
// ==============================================
let getMasterArray = function(){
    if (upperCase.checked){
        for (i = 0; i < upperArray.length; i++) {
            masterArray.push(upperArray[i])
        }
        console.log("upperArray Clicked " + masterArray)
    } else {
        console.log("you didn't click the uppercase!")
    };
    if (lowerCase.checked){
        for (i = 0; i < upperArray.length; i++) {
            masterArray.push(lowerArray[i])
        }
        console.log("lowerArray Clicked " + masterArray)
    } else {
        console.log("you didn't click the lowercase!")
    };
    if (numbers.checked){
        for (i = 0; i < numberArray.length; i++) {
            masterArray.push(numberArray[i])
        }
        console.log("numbers Clicked " + masterArray)
    } else {
        console.log("you didn't click the numbers!")
    };
    if (symbols.checked){
        for (i = 0; i < upperArray.length; i++) {
            masterArray.push(symbolArray[i])
        }
        console.log("symbols Clicked " + masterArray)
    } else {
        console.log("you didn't click the symbols!")
    };
    return masterArray;
}
// ==============================================

// console.log(permittedCharacter())
console.log(getMasterArray.length)

// this function will generate a random character based on the permitted characters from permittedCharacters function 
randomCharacter = permittedCharacters => {
    const i = Math.floor(Math.random * getMasterArray.length);
    const newCharNum = permittedCharacters[i];
    console.log(newCharNum);
    return String.fromCharCode(newCharNum);
};

// this function will return a string of numbers which will be the password
generatePassword = (numberOfCharacters = 1) => {
    const totalOfChar = getMasterArray().length;
    const passLength = (Math.random * totalOfChar);
    // for (let i = 0; i < numberOfCharacters; i++){
    //     // run through the number generating function for i 
    //     // push the new characters into the password using concat()
    // };
    return upperCase.checked;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(e) {
  e.preventDefault
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  getMasterArray();
  permittedCharacter();

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
