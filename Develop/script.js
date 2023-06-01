// Assignment code here


function generatePassword(){

//prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
//asked for character types to include in the password 
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters WHEN I answer each prompt
//my input should be validated and at least one character type should be selected WHEN all prompts are answered


character = prompt("How long would you want your password? Choose between 8 - 128 charaters.")

if (character < 8 || character > 128){
  alert ("please choose a valid number");
} else if (isNaN(character)) {
  character = alert("please choose a valid number")
} else { 
  alert ("your password will be " + character + " character long." )
}

//characters
var querySelector = {
   upperalpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   loweralpha: "abcdefghijklmnopqrstuvwxyz",
   numbers: "0123456789",
   symbols: "!@#$%^&*()_+"
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

//randomizer
for (var i = 0; i < querySelector.length; i++) {
   var randomNumber = math.floor(math.random() * querySelector.length);
   password += querySelector.substring(randomNumber, randomNumber +1)
}

console.log("something happend")

return "text"
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
