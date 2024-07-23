// create a string

const str = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";
console.log(str);
// arithmetic operators for values
let num1 = 5 + 5 / 2 * 2;
let num2 = 1600 / 40 ;
let num3 = 40 - 1; 
//dialog the code with alert 
alert(str + num1 + "-" + num2 + "-" + num3);


let pass1 = "10-40-39";
function check() {
  var pass2 = document.getElementById("password").value;
  if (pass1 == pass2) {
    document.getElementById("button").disabled = false;
  }
}