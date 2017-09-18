var foo = "foo";

(function(){
	var foo = "foo2";
	console.log(foo); // "foo2"

})(); //donkey balls

console.log(foo); //"foo"

//IIFE - Immediately Invoked Function Expression
//run-time says, "I have an immediate value. and I can immediately execute it on line 7."
//always name your IIFE for stack tracing.

//put all of your private functions into a named IIFE

//Pass in a global value

var foo = "foo";

(function(bar){
	var foo = bar;
	console.log(foo); //"foo"

})(foo); //you can put the function call parens inside of the encompassing parens too.
		//

console.log(foo); //"foo"