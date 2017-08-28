// Arrays allow us to collect things, they are a type of variable.
//They are very similar to strings, which is an array of characters.
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var raceWinners = [33,72,64];
var myFavoriteThings = ['Broccoli', 60481, true];

// General rules about arrays:
// explicit arrays have parens with declaration and implicit arrays have parens with declaration
// square brackets separate items

//Literals
var emptyArray = [];
var studentArray =[ "Fred", "Jordan", "Bobbie"];
var mixedArray = ["Paul", 1, (39<40)];//mixed (JS only)


//Indexes and accessing array values
//Access spots using bracket notation []
console.log(rainbowColors[0]);
console.log("My favorite color is", rainbowColors[3]);//automatically adds space when comma is used.

// Iterating Arrays

//Use a loop
//use array.length to go through the whole thing

for (i = 0; i < rainbowColors.length; i++){
	console.log(rainbowColors[i]);
};

