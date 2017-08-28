// Bronze Challenge ! -- Write a function with two parameters, city and state.
// inside the function concatenate the two parameters into a single string and print to console.
// 
function cityState (city,state){
	let cityPlusState = city + ", " + state;
	return cityPlusState; //conclusion: the variable stored in memory here can only be used within this function, so what's the point of storing in memory?
}						  //because otherwise the result will not be stored or accessible when you call the function (undefined)
console.log("I am from " + cityState("Fort Wayne", "Indiana"));

//Scope experiment
// let country = "USA";
// let cityStateAndCountry = cityPlusState + " " + country; //whether var, let, or const used within the function, cityAndState is undefined
// console.log(cityStateAndCountry);

// let country = "USA";
// let cityStateAndCountry = cityState() + " " + country; //apparently this can't be done this way
// console.log(cityStateAndCountry); //why does this equal undefined, undefined USA? I must have to do this inside the function itself

// Silver Challenge! ---- Write a function that will help a person easily calculate monthly bills such as water, power, rent, netflix, etc.
// 					   When we run the function, it should print the total to the console with a pretty message.
// 					   for example, "I will pay $850.00" in bills this month.

function monthlyBills(water,power,rent,netflix){
	let allBills = water + power + rent + netflix;
	totalBills = ((Math.round(allBills * 100))/100)
	return totalBills;
}
console.log("The amount of green comin' outa yer wallet per month is: " + monthlyBills(46.75, 89.66, 495.99, 15.99));


// Gold Challenge! - Write a function that checks if any number is odd or even.

function oddEven(num){
	if (num % 2 === 0){
		let questionNum = ("Your number " + num + " is even.");
		return questionNum;
	} else {
		let questionNum = ("Your number " + num + " is odd.");
		return questionNum;
	};
};

console.log(oddEven(574834735749239275489)); //It works!  Huzzah! Mod is fun, mod is fun! :^P
//... unless, of course, you exceed the maximum sigfig number length (16, apparently). X^D





