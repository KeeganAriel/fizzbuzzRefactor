$(document).ready(function() {

// fizzbuzz function code
function divisableBy(number, divisor) {
    return number % divisor === 0;
}
function write(whatToWrite) {
    $('body').append(whatToWrite + "<br>");
}

function fizzBuzz(inputFizz) {
    for (i = 1;  i <= inputFizz; i++) {
         if (divisableBy(i,3) && divisableBy(i,5)) {
            write("FizzBuzz");
        } else if (divisableBy(i,3)) {
            write("Fizz");
        } else if (divisableBy(i,5)){
            write("Buzz");
        } else {
            write(i);
        } 
    }
}

// promt user for a number
var inputFizz = false;

// // JavaScript to convert a string into an integer.
// var processedInputFizz = parseInt(inputFizz, 10);


function validInput(userString) {
    if (isNaN(userString)) {
        return false;
    } 

    if (userString % 1 !== 0) {
      return false;
    } 
    if (userString <= 0) {
        return false; 
    } if (userString > 100) {
        return false;
    }
    return true;

}
do {
    inputFizz = prompt("Enter your number here! It should be between 1 and 100 and a whole number!  Let's FizzBuzz!");

} while (validInput(inputFizz) === false);

    var processedInputFizz = parseInt(inputFizz, 10);

// // check for NaN
// if (isNaN(processedInputFizz)) {
//     inputFizz = prompt("Are you sure that's a real number? Enter a number!");


// // code to ensure that the user has not supplied a decimal value
// } else if (processedInputFizz !== parseFloat(inputFizz)) {
//    inputFizz = prompt("Enter a number that's not a decimal!!");
// }

// // check to see if it's a whole number between 1-100
// if (processedInputFizz > 100) {
//     prompt("You need to enter a smaller number!");
// } if (processedInputFizz < 1) {
//     prompt("Enter a number that's bigger then or equal to 1.");
// } else { 

// yes, call fizzBuzz on number
fizzBuzz(processedInputFizz);



});