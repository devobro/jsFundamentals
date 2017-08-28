// let age = prompt(what is your age?);
// // If the question we ask within the parenthesis is true, then we do what is in the curly braces
// if(age < 16) { //
// 	console.log("you can't drive");
// } else if (age == 16){
// 	console.log("you can drive FINALLY!");
// } else {
// 	console.log("you've probably been driving already");
// }


//Comparison Operators

// == | compares two values
// === | compares two values and type
// != | does not equal value
// !== | does not equal value or type
// > | greater than
// < | lesser than
// >= | greater than or equal to
// <= | less than or equal to

//Logical Operators
//&& = and
//|| = or
//! = not

// var isOn = true;
// var isHot = false;


// if(isOn) { //assumes that we write (isOn == true)
// 	console.log("The light is on. It's bright.")
// }


// if(isOn === true){
// 	console.log("The light is on");
// }


// if(isOn && isHot) {
// 	console.log("Lights on and it's hot");
// }


// if(isOn || isHot){
// 	console.log("lights on or it is hot");
// }


// if(!isHot){
// 	console.log("it is not hot");
// }

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going up")
} else {
	console.log();
	console.log("Going down");
}

if (!elevatorBroken){
	console.log("Bummer. Let's take the stairs.")
} else {
	console.log("Hooray! We don't have to take the stairs! (we're lazy)")
}

if (elevatorStuckWhileWeAreOnIt){
	console.log("Oh no! We're stuck!");
} else {
	console.log("Hooray! We can ascend or descend!");
}

if (elevatorBroken && elevatorDown){
	console.log("I hope this thing doesn't start flying down!");
} else {
	console.log("How long are you in town for");
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt){
	console.log("Hi Bob, this is Bob with maintenance.  How can I help?")
}

if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt){
	console.log("This is not our lucky day!")
}




























