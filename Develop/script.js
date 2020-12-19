// Assignment code here


function generatePassword() {
  
  var length;
  var numeric;
  var special;
  var uppercase;
  var lowercase;
  var options;
  
  let specialcha = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
  let numberlist = ["0","1","2","3","4","5","6","7","8","9"];
  let uppercaselist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
  let lowercaselist = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  

  length = prompt("how much length of characters do you want for your password? Choose between 8 and 128");

  if (!length) {
    alert("A value is required to proceed");
  } else if (length < 8 || length > 128) {
    length = prompt(" A number has to be chosen only between between 8 and 128")
  
  } else {

    special = confirm("Do you want special characters in your password? click 'ok' for yes and 'cancel' for no");
    numeric = confirm("Do you want numbers in your password? click 'ok' for yes and 'cancel' for no");
    uppercase = confirm("Do you want uppercase characters in your password? click 'ok' for yes and 'cancel' for no");
    lowercase = confirm("Do you want lowercase characters in your password? click 'ok' for yes and 'cancel' for no");
  }

  //if the confirm box returns false for all the 4 password criterias
  if (!special && !numeric && !uppercase && !lowercase) {
    options = alert("you haven't chosen any criteria. Atleast one criteria must be chosen to continue.")
  }

  //if the confirm box returns true for all the 4 password criterias
  else if ( special && numeric && uppercase && lowercase) {
  options = specialcha.concat(numberlist, uppercaselist, lowercaselist);
  }

  //if the confirm box returns true for any 3 of the password criterias:
  //if the confirm box returns true for the special, numeric and uppercase password criterias
  else if (special && numeric && uppercase) {
  options = specialcha.concat(numberlist, uppercaselist);
  }

  //if the confirm box returns true for the special, numeric and lowercase password criterias
  else if (special && numeric && lowercase) {
  options = specialcha.concat(numberlist, lowercaselist);
  }

  //if the confirm box returns true for the special, uppercase and lowercase password criterias
  else if (special && uppercase && lowercase) {
  options = specialcha.concat(uppercaselist, lowercaselist);
  }

  //if the confirm box returns true for the numeric, uppercase and lowercase password criterias
  else if (numeric && uppercase && lowercase) {
  options = numberlist.concat(uppercaselist, lowercaselist);
  }

  //if the confirm box returns true for any 2 of the password criteria:
  //if the confirm box returns true for the special and the numeric password criterias

  else if (special && numeric) {
  options = specialcha.concat(numberlist);
  }

  //if the confirm box returns true for the special and the uppercase password criterias
  else if (special && uppercase) {
  options = specialcha.concat(uppercaselist);
  }

  //if the confirm box returns true for the special and the lowercase password criterias
  else if (special && lowercase) {
  options = specialcha.concat(lowercaselist);
  }

  //if the confirm box returns true for the numeric and the uppercase password criterias
  else if (numeric && uppercase) {
  options = specialcha.concat(uppercaselist);
  }

  //if the confirm box returns true for the numeric and the lowercase password criterias
  else if (numeric && lowercase) {
  options = specialcha.concat(lowercaselist);
  }

  //if the confirm box returns true for the uppercase and the lowercase password criterias
  else if (uppercase && lowercse) {
  options = uppercaselist.concat(lowercaselist);
  }

  //if the confirm box returns true for any one of the 4 password criterias:
  // if the confirm box returns true for only the special password criteria
  else if (special) {
  options = specialcha;
  }

  // if the confirm box returns true for only the numeric password criteria
  else if (numeric) {
  options = numberlist;
  }

  // if the confirm box returns true for only the uppercase password criteria
  else if (uppercase) {
  options = uppercaselist;
  }

  // if the confirm box returns true for only the lowercase password criteria
  else if (lowercase) {
  options = lowercaselist;
  }


  var newpassword = [];
  console.log(options.length);
  for (var i = 0; i < length; i++) {
    var pickoptions = options[Math.floor(Math.random()*options.length)];
    newpassword.push(pickoptions);
  }

  var newps = newpassword.join("");
    return newps;




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
generateBtn.addEventListener("click", writePassword)

