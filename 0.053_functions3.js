//Call a Function in a variable and the result of the function is hoisted to the variable and stored there.

let yourMomsAge = momBirthAndToday(1978, 2017);

console.log("Your mom's age is " + yourMomsAge + ".");

function momBirthAndToday (birthYear, presentYear){
	momAgeCalc = presentYear - birthYear;
	return momAgeCalc;
};
yourMomsAge = momBirthAndToday(1982, 2017);
console.log("Your mom's age is " + yourMomsAge + ".");

//useful for organizing, I guess, and simplifying later calculations. The variable can then be used
//above the function or below.
//interesting: when you duplicate the variable call in another place, with another identifier, JS throws an error (duplicate variable).
//but it doesn't care if you just put more data in the variable without the identifier, then JS will happily
//run the function again, with new data.
//This may be useful, later on, by using data created by a function, in two other functions, in two completely separate areas of code.
