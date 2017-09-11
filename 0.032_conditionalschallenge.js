//Bronze Challenge - write a conditional that chacks an age variable aned prints a different statement depending on the age.

let age = 20;

if (age >= 0 && age < 16){
	console.log("You're too friggin' young to do anything");
} else if (age == 16){
	console.log("Hooray! You can drive, now! (don't run me over)");
} else if (age > 16 && age < 18) {
	console.log("Wha Wha, you can still drive, but ya can't vote, sucka!");
} else if (age == 18){
	console.log("Hooray! You can vote!");
} else if (age > 18 && age < 21){
	console.log("You can vote, but ya can't drink, sucka!");
} else if (age == 21){
	console.log("Hooray! You can drink!");
} else if (age > 21){
	console.log("Oh man, you old now.")
}

//Silver Challenge - Create an if, else, else-if statement that has several conditions.
let coltsWins = 0;
let patsWins = 3;
let totalGames = 3;

if (totalGames == coltsWins){
	console.log("Holy Moly! You suckas got schooooooled!");
} else if (patsWins == totalGames){
	console.log("Yeah well, Mercury was in retrograde!");
} else if (patsWins > coltsWins){
	console.log("You fools cheated, the other two times! Stop deflating the friggin ball!");
} else {
	console.log("Haha, we beat the pants off of ya!");
}

//Gold Challenge - FizzBuzz (I did it without searchingitup! Hooray! I'm smart!)

for (i = 1; i < 101; i++){
	if (i % 3 == 0 && i % 5 == 0){
		console.log("FizzBuzz");
	} else if (i % 3 == 0){
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	};
};

