//looking for variables or lexical examiners
//we don't compile JS into binary interpreter
//JavaScript has function scope only.

var foo = "bar";  //var = variable declaration, foo = identifier, "bar" = initialization value
					// is two separate operations: declaration and initialization. happens at totally separate times.
					// compiler first-pass is looking for all variable and function declarations.
					//compiler registers each declaration into a scope (global, in this case)
					//jits = just in time compilation. compiler skips over the code within the function
					//until the function is actually called, later in the code (deferred compilation).
					//compiler talks to the scope manager, in the language engine.
					//parameter naming is an implicit declaration, so it gets compiled in the first pass.
					//after the compilation phase is the execution phase, which is has no need for
					//the "var" or "function" keywords, so the compiler doesn't even read them.
					// lhs = left-hand side, rhs = right-hand side (transliterative terms)
					// foo is lhs, and "bar" is rhs.
					// lhs is target, and rhs is the source.

function bar(){		//compiler asks scope manager if it's heard of the lhs reference for bar()
	var foo = "baz";//
}

function baz(foo) { //assume called,
	foo = "bam";	//compiler says to scope manager "hey scope of baz() have you heard of variable "foo""
					//scope manager looks at the parameter and assigns the value there

	bam = "yay";	//(not in strict mode) compiler asks scope manager if it has an lhs reference
}					//scope manager says, "no" then it goes out one scope level (global)
					//scope manager says, "no but I just created it in global scope"
					//then it puts the value "yay" in there. (leakage of global variables)
					//always write in strict mode
					//in strict, this would be an undeclared variable and thrown an error because
					//in the declaration phase, the compiler did not see the declaration of that
					//variable in any scope in which it had access.
					//"undefined" is returned, but only because it is the distinct value which is
					//assigned to a declared variable with no initialization

//**************************************************************************************//					
var foo = "bar";

function bar(){
	var foo = "baz";

	function baz(foo) {
		foo = "bam";
		bam = "yay";
	}
	baz();
}
bar();
foo;
bam;
baz();

//***running through a sample execution***
//***initialization phase***
//line 39, compiler: "hey scope manager, I have an lhs variable declaration
//for a variable named foo." scope manager: "ok got it, that variable is now registered
//next the compiler goes and tells the scope manager to register a function bar
//then it enters into the scope of function bar (recursive descent)
//then it tells the scope manager to register another variable foo but only
//within the scope of function bar
//then it tells the scope manager to register a function baz, but only in the scope of function bar
//then it tells scope manager to register a named parameter foo (implicit declaration) within the scope
//of function baz
//***execution phase***
//line 39, var disappears and the compiler says: "hey scope manager, I have an lhs reference to a variable
//named foo in the global scope, ever heard of it?" scope manager: "yes I have, here's a reference to it."
//compiler makes an assignment to variable foo, since it is an immediate value.
//compiler then skips to line 50 because the rest of the lines were compiled away.
//compiler says to scope manager: "I have an rhs declaration for a variable named bar." scope manager:
//"yes, here is the reference and I'll return a function object."
//Then the compiler will attempt to execute the function object which was returned.
//compiler: "hey scope manager, I have an lhs reference for a variable named foo in the scope of function bar
//ever heard of it?"
//scope manager: "I looked first in my local scope, function bar, and found it there, here's the reference."
//scope manager look locally first, then globally, then stops. so first-come-first-served (called shadowing)
//next, line 44-46 were compiled away, so the compiler goes to line 48
//compiler to scope manager: "I have an rhs reference for a variable named baz, in the scope of function bar"
//scope manager: "yes, here's the reference." then it returns a function object and compiler executes it.
//within baz: compiler to scope manager: "I have an lhs reference to a variable named foo, in the scope
//of function baz." scope manager: "Yes, it was referenced in the implicit declaration of parameter foo."
//Then the "bam" value is assigned to variable foo but only the one in scope of function baz because
//of the first-come-first-serve local lookup shadow.
//next the compiler to scope manager: "I have an lhs reference to a variable named foo, in the scope of function baz."
//scope manager: "nope, go up one level and look there"
//compiler: "hey scope manager, do you have a reference to variable bam, in the scope of function bar?" scope manager: "no go to global scope"
//compiler: "hey scope manager, do you have a reference to varable bam, in global scope?"
//scope manager: "no, but since we're in global, let me create that for you and assign a value of "yay" (auto-global)."
//next, line 51 is executed***
//compiler: "hey scope manager, I have an rhs reference to a variable named foo in the global scope, what is its value"
//scope manager: "I've heard of it and the value is "bar"
//c: "I have an rhs for a global variable bam" sm: "I just created it and the value is "yay""
//then it attemps to run line 53 and returns a reference error.





