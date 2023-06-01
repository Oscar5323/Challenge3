// Assignment code here
//characters

var choice=[]


var upperalpha= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var loweralpha= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers= ['1','2','3','4','5','6','7','8','9','0'];
var symbols= ['!','@','#','$','%','^','&','*','(',')','_','+']


function generatePassword(){

//prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
//asked for character types to include in the password 
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters WHEN I answer each prompt
//my input should be validated and at least one character type should be selected WHEN all prompts are answered


character = prompt("How long would you want your password? Choose between 8 - 128 charaters.")

choice=[];

if (character < 8 || character > 128){
  return "please choose a valid number";
} else if (isNaN(character)) {
  return "please choose a valid number";
} else { 
  alert ("your password will be " + character + " character long." )
}

if(confirm("do you want uppercase characters?")){
  choice = choice.concat(upperalpha)
}

if(confirm("do you want lowercase characters?")){
  choice = choice.concat(loweralpha)
}

if(confirm("do you want numbers?")){
  choice = choice.concat(numbers)
}

if(confirm("do you want special characters?")){
  choice = choice.concat(symbols)
}

var password2="";

for (let i = 0; i < character.length; i++) {
  var random = choice[Math.floor(Math.random()* choice.length)]
  password2 = password2 += random
}

return password2

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
