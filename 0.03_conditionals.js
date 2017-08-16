// Conditionals

/*
Chaining conditional operators
------------------------------
&&
//


*/
// var name = "Devon";

// if("Devon" == name) {
// 	console.log("Hey your name is " + name + ".");
//  } else {
// 	console.log("What is your name?");
// }



//Create an If statment that checks if the users name does not have a capital letter,
// Rebuild their name with a the lowercased letter capitalized capital letter

// var name = prompt("What is your name?");
// if (name[0] == name[0].toUpperCase()) {
//  	console.log(name);
// } else  {
//  	name = name.substring(0,1).toUpperCase() + name.substring(1,1000);
//  	console.log("Let me fix that: " + name);
// }

var age = 23
if (age >= 25) {
	console.log("Yay you get lower rates on your car rental");
} else if (age >= 21) {
	console.log("Yay you can drink!");
} else if (age >=18) {
	console.log("Yay you can vote!");
} else {
	console.log("sorry too young to do anything!")
}