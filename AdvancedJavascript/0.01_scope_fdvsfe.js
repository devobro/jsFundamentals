var foo = function bar(){
	var foo = "baz";

	function baz(foo){
		foo = bar;
		foo;
	}
	baz();
};

foo();
bar();

//***Function Declaration vs. Function Expression
//Tell the difference by whether or not the function word is the first in the statement
//if first in the statement, Function Declaration.  If not, Function Expression (case of line 1: named function expression).
//because bar is a function expression the bar name is only accessible within the scope of the function.
//so line 12 would throw an error.
//Named function expression vs Anonymous function expression***
//3 negatives to anonymous:
//1: we have no way to refer to ourself within the function.
//2: they don't play well with debuggers because the error message only refers to an anonymous function.
//3: self-documents code, so you have to refer to the outer context of code to find out what it's doing.
//caveat: the "catch" phrase variable is block-scoped, so it's only accessible within catch.
