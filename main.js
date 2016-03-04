$(document).ready(function() {

// fizzbuzz function code
function divisableBy(number, divisor) {
    return number % divisor === 0;
}

function fizzBuzz(inputFizz) {
    for (i = 1;  i <= inputFizz; i++) {
         if (divisableBy(i,3) && divisableBy(i,5)) {
            $('body').append("FizzBuzz");
        } else if (divisableBy(i,3)) {
            $('body').append("Fizz");
        } else if (divisableBy(i,5)){
            $('body').append("Buzz");
        } else {
            $('body').append(i);
        } 
    }
}

// promt user for a number
var inputFizz = prompt("Enter your number here! Let's FizzBuzz!");

// check to see if it's a whole number between 1-100
if (inputFizz > 100) {
    prompt("You need to enter a smaller number!");
} if (inputFizz < 1) {
    prompt("Enter a number that's bigger then or equal to 1.");
} else { 
    // call fizzBuzz on number
fizzBuzz(inputFizz);

}

//convert the value the user supplies from a string to a number using +

// no, then promt for real number
prompt("Are you sure that's a real number?");

// validate user input to ensure the user is submitting a number. use the parseInt() function in 
// JavaScript to convert a string into an integer.
parseInt(string, radix);

// code to ensure that the user has not supplied a decimal value

// call fizzBuzz on number
fizzBuzz(inputFizz);



});