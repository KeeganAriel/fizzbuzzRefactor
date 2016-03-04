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
var inputFizz = prompt("Enter your number here! Let's FizzBuzz!");

// JavaScript to convert a string into an integer.
parseInt(inputFizz, 10);

// check to see if it's a whole number between 1-100
if (inputFizz > 100) {
    prompt("You need to enter a smaller number!");
} if (inputFizz < 1) {
    prompt("Enter a number that's bigger then or equal to 1.");
} else { 
    // yes, call fizzBuzz on number
fizzBuzz(inputFizz);

}


// no, then promt for real number
    // prompt("Are you sure that's a real number?");


// code to ensure that the user has not supplied a decimal value

// call fizzBuzz on number
fizzBuzz(inputFizz);



});