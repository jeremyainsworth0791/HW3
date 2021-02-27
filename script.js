// Assignment Code
var generateBtn = document.querySelector("#generate");


function generateOptions(pOptions) { 
  var pLength = parseInt(prompt("How many characters are needed for your password. (Must be greater than 8 characters, and less than 128.)"));
     while(pLength <=7 || pLength >= 128){
        pLength = parseInt(prompt("The number of characters must be greater than 8, and less than 128."))
     }
  
  var pUppercase = confirm("Do you want uppercase letters.");
  var pLowercase = confirm("Do you want lowercase letters.");
  var pNumbers = confirm("Do you want numbers.");   
  var pSymbols = confirm("Do you want special characters. i.e !, @...");

  if(pUppercase === false && pLowercase === false && pNumbers === false && pSymbols === false){
    alert("Password must include one character type.")
    return;
  }

  var pOptions = {
    pLength: pLength,
    pUppercase: pUppercase,
    pLowercase: pLowercase,
    pNumbers: pNumbers,
    pSymbols: pSymbols
  }
  return pOptions;
}

function generatePassword(){
  var options = generateOptions();
  console.log(options);
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbers = ["1","2","3","4","5","6","7","8","9","0"];
    var symbols = ["!","@","#","$","%","^","&","*","(",")"];
  
  // empty variable for all choices user made
  
  // empty variable to guarantee all chars are present
  var guarChar = [];
  var password = "";
  var choices = [];
    if(options.pUppercase === true){
      
      var choices = choices.concat(uppercase);
      
      guarChar.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }

    if(options.pLowercase === true){
      var choices = choices.concat(lowercase);
   
      guarChar.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }

    if(options.pNumbers === true){
      var choices = choices.concat(numbers);
      
      guarChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if(options.pSymbols === true){
      var choices = choices.concat(symbols);
     
      guarChar.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    console.log(choices);
    console.log(guarChar);
   var n = guarChar.length;
    // for (var i=0; i<options.length; i++)
    for(i = 1; i <= (options.pLength-n);i++){
      guarChar.push(choices[Math.floor(Math.random() * choices.length)]);
      console.log (guarChar);
      
    }
    // console.log (guarChar);
    password = guarChar.join('');
    return password;
  }

  // If all chars selected insure that all are present
  // If statement for each choice
  // push entire char set to choices array && push a random character from the set to the guaranteed
  // need random selection from possible options
  // guarChar.push(getRandom(uppercase))
// Write password to the #password input
 
function writePassword() {
   


  
   var password = generatePassword()
    
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
