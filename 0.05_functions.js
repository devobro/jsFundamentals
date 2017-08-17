// Functions

// function greeting() {
// 	console.log("Good Morning!");

// }
//parenthesis invokes our function so that it runs the code inside of it
// greeting();

//challenge, create a function that says "Day 4 feeling great!"

// function dayFour(day, day1, day2) {
// 	console.log("Day 4 feeling great!" + " " + day);
// }

// dayFour("Jay");


// function sum(num1, num2){
	
// 	console.log(num1 + num2);

// }

// sum(3,4);

//Void Functions


// var fname = "Aj";

// function hello(fname){
// 	var lname = "Hephner"
// 	console.log(fname + " " + lname);
// }
// console.log(lname);

// hello("TJ");
// console.log(fname);

// if ( 1 == 1) {
// 	let sum = 1 + 1;
// 	console.log(sum);
// }
// console.log(sum);



// Create a function called capitalize() and use teh for loop we created yesterday to
// cqapitalize names


// function capitalize(studentName){
// 	for (var l in studentName) {
// 	while (l < 1) {
// 		alert(studentName[l].toUpperCase() + studentName.substring(1,1000));
// 		l++;
// 		}
// 	}
// }

// capitalize(prompt("What is your name?"));

function capitalize(studentName) {
	var newName = " ";
	for (var l in studentName) {
		if (l === "0") {
		newName = studentName[l].toUpperCase();
		} else {
		newName += studentName[l];
		}
	}
	return newName;
	alert(newName);
}

capitalize("devon");


// Functions with parameters

