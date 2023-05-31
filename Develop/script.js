// Assignment code here

function generatePassword(){
  var upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var loweralpha = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*()_+-="
}

character = prompt("How long would you want your password? Choose between 8 - 128 charaters.")

if (character < 8 || character > 128){
  alert ("please choose a valid number");
} else if (isNaN(character)) {
  character = alert("please choose a valid number")
} else { 
  alert ("your password will be " + character + " character long." )
}

//uppercase
wantuppercase = confirm("do you want uppercase characters?");

if(wantuppercase){
  var uppercase = alert(" your password will have uppercase characters.")
}
else {
  alert("will not have uppercase characters.")
}

//lowercase
wantlowercase = confirm("do you want lowercase characters?");

if(wantlowercase){
  var lowercase = alert(" your password will have lowercase characters.")
}
else {
  alert("will not have lowercase characters.")
}

//numbers
wantnumbers = confirm("do you want number characters?");

if(wantnumbers){
  var number = alert(" your password will have number characters.")
}
else {
  alert("will not have number characters.")
}

//symbols
wantsymbols = confirm("do you want symbol characters?");

if(wantsymbols){
  var symbol = alert(" your password will have symbol characters.")
}
else {
  alert("will not have symbol characters.")
}






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
