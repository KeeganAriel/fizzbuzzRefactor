function validInput(userString) {
    if (isNaN(userString)) {
    	return false;
    } 
}
console.log(validInput("one") === false); 
console.log(validInput("33") === true); 