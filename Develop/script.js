// Assignment code here
var length;
var numeric;
var special;
var uppercase;
var lowercase;
var options;




function generatePassword() {

  length = prompt("how much length of characters do you want for your password? Choose between 8 and 128");

  if (!length) {
    alert("A value is required to proceed");
  } else if (length < 8 || length > 128) {
    length = prompt(" A number has to be chosen only between between 8 and 128")
  
  } else {

    numeric = confirm("Do you want numbers in your password? click 'ok' for yes and 'cancel' for no");
    special = confirm("Do you want special characters in your password? click 'ok' for yes and 'cancel' for no");
    uppercase = confirm("Do you want uppercase characters in your password? click 'ok' for yes and 'cancel' for no");
    lowercase = confirm("Do you want lowercase characters in your password? click 'ok' for yes and 'cancel' for no");
};

if (!special && !numeric && !uppercase && !lowercase) {
    alert("you haven't chosen any criteria. Atleast one criteria must be chosen to continue.")
}



















};






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
