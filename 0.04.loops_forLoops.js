let cars = ["Prius", "Tesla", "Alfa Romeo", "Volt", "Fisker Karma"]
for (i = 0; i < cars.length; i++){
	outputCars = "One of your favorite cars is " + cars[i] + "."
	console.log(outputCars);
};
//The for loop is another way of repeating statements, more specialized than while:

for (var i = 1; i < 50; i += 5){ //ok, so it does the calculation in parenthesis before it decides whether or not the condition is met.
	console.log(i); //so it runs the first part in the first loop, then subsequent loops it runs the third condition before the second.
};

//Syntax
// for (setup; test expression; increment){
// 	body;
// }
// diagram: http://www.dummies.com/how-to/content/the-4-parts-0f-every-for-loop-in-c.html

for (var i = 1/*variable/index section*/; i <= 10 /*conditional section*/; i++/*increment*/){
	console.log("Number", i);
}

for (var i = 30; i > 0; i--){
	console.log(i);
}

for (var i = 3; i < 30; i += 5){
	console.log(i);
}

//For loops with arrays -- use the "In" keyword

var fullName = {fname: "Devon", lasName: "Brosch", age: 39};
var iteration;

for (iteration in fullName){
	console.log(fullName[iteration]);
};








