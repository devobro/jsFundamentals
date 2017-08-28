// Functions

// Executes some action or actions.
// lifeblood of your program
// Used everywhere!
// Allows us to reuse code.

// Examples:
// If I want to greet every user that comes to my site,
// I don't want to write the code over and over for each user.
// Math examples - finding the area of shape
// Etc.


// --------------------------------
// Declaring Functions
// You can use the function keyword first.

function hello(){
	console.log("Hello World!");
};
hello(); //Call the function!

let hey = function(){ //another way to call a function
	console.log("Hey!");
};

hey();

function printOneNumber(){
	console.log(1);
};

// -----------------------------------------
// Scope & Variables inside of functions

function addNumbers(){
	var x = 10;
	var y = 2;
	console.log(x + y);
};

function multiplyNumbers(){ //these x and y variables are in different scopes, out of scope of each other.
	var x = 1;
	var y = 2;
	console.log(x * y);
};

function divideNumbers(){
	var x = 47;
	var y = 387698758995848695;
	console.log(x / y)
}

function modNumbers(){
	var x = 69;
	var y = 96;
	console.log(x % y)
}

addNumbers();
multiplyNumbers();
divideNumbers();
modNumbers();

// Parameters and Arguments
// Functions can accept any number of arguments
// Parameters are names listed in the function definition.
// Arguments are the real values recieved by the function when it is invoked.

function numberEntered(x){
	console.log("The number you entered was: ", x);
}
//call must now have a value (argument)
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

// Two parameters
function addAnyTwoNumbers(x,y){
	console.log(x + y);
}

addAnyTwoNumbers(4,5);
addAnyTwoNumbers(6,11);
addAnyTwoNumbers(7,8);

function addMoreNumbers(firstNum, secondNum){
	console.log(firstNum + secondNum);
}

addMoreNumbers(5,7);


// Return keyword
// When JS reaches a return statement it wil stop executing that function

function mood(){
	return "I'm doing great";
}
mood();

function add(x,y){
	return x + y;
}

add(1,1);

function fullName(first, last){
	var wholeName = first + " " + last;
	return wholeName; //"return" distills down to a single value. returns a value, which is stored in memory, which can then be used later.
}

fullName("Paul", "O'Conner");

function calculatePriceIndiana(quantity, price){
	var tax = 0.07;
	var tip = 0.25;
	var totalTip = quantity * price * tip; // added tip because always tip, dangit (at the sushibar anyways)! :^P
	var totalTax = quantity * price * tax;
	var totalPrice = totalTip + totalTax + quantity * price;
	return ((Math.round(totalPrice * 100))/100); //fixed it so that it displays cents when a price is entered with cents. I'm smart! haha
}

console.log("Sushi Bar: " + calculatePriceIndiana(8, 9.95));


function petNameAndBreed(name,breed){
	var petDetails = name + ", " + breed;
	console.log(petDetails);
	return petDetails;
}

petNameAndBreed("Luna", "Labradoodle");
petNameAndBreed("Levi", "Pug");


















