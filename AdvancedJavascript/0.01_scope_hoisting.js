a;			//???
b;			//???
var a = b;
var b = 2;
b;			//2
a;			//???

//hoisting is a mental construct that we use to explain the behavior of JS
//JS compiles the code first and finds all of the declarations.
//so it isn't actually hoisting the variable declarations to the top
//it just reads those at the first compiler pass-through.

var a = b();
var c= d();
a;
c;

function b(){
	return c;
};

var d = function(){
	return b();
};

//function got "hoisted" but not the function expression
//functions get hoisted before variables

//***recursion***
//when a function calls itself it's called recursion
//mutual recursion: refers to two or more functions calling each other.

a(1);

function a(foo){
	if (foo > 20) return foo;
	return b(foo + 2);
}
function b(foo){
	return c(foo) + 1;
}
function c(foo){
	return a(foo * 2);
}

//this wouldn't work without hoisting
//answer 39 because function b is passed through but adds 1 to the stack each time, which gets added at the end.

function foo(bar){
	if (bar){
		console.log(baz); //reference error
		let baz = bar;
	}
};

foo("bar");

//lets don't hoist



