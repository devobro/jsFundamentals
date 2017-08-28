//.charAt iterates over a string in the array until it gets to the character at the index specified
//doesn't work with numbers, instead it throws an error "not a function"
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

console.log(rainbowColors[0].charAt(0));
console.log(rainbowColors[3].charAt(0 && 3));//iterates only once

