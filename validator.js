function validInput(userString) {
    if (isNaN(userString)) {
    	return false;
    } else {
    	return true;
    }
}
console.log(validInput("one") === false); 
console.log(validInput("33") === true); 
console.log(validInput("pizza") === false); 
console.log(validInput("3.14") === false); 