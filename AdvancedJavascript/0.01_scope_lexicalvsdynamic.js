//lexical-predominant in javascript, (lex=lexing stage in the compiler when parsing through code), compile-time scope.
//so the scope is determined during authoring and can't be changed.
//strictly nesting


function foo(){
	var bar = "bar";

	function baz(){
		console.log(bar); //lexical!
	}
	baz();
}

foo();

//returns "bar" because compiler wen't to the next local scope and found the variable declaration there

//***cheating lexical scope***

var bar = "bar"
function fool(str){
	eval(str); //cheating!
	console.log(bar); //42
};

fool("var bar = 42;")

//eval takes any given string and treats that as if it was code that existed at that point in compilation.
//so it modifies the existing lexical scope of fool to add a new variable declaration to it, at run-time
//makes it run slower because it disables some optimizations
//set timeout with a string syntax acts the same way and you shouldn't use it.

var obj = {
	a: 2,
	b: 3,
	c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj){
	a = b + c;
	c = b - a;
	d = 3; //??
};

obj.d; //undefined
d; // 3 -- oops!

//using the with () keyword is a shorthand way of automatically putting the object reference in front of each
//variable in the function.
//so if d doesn't exist in the object, then it getst pushed out of the object and becomes a global variable.
//also disables optimizations and makes code run slower.
//avoid it.

//**dynamic scope***

//theoretical dynamic scoping
function foo(){
	console.log(bar); //dynamic!
};

function baz(){
	var bar = "bar";
};

baz();
//the decision of how scoping works in dynamic scoping is a run-time descision
//as opposed to in lexical scope, it's an author-time decision





