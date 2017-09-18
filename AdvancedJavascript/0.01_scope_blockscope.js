//let(ES6+)
//like var but it attaches the variable implicitely in any block in which it appears

function foo(){
	var bar = "bar";
	for (let i=0; i<bar.length; i++){
		console.log(bar.charAt(i));
	}
	console.log(i);
};

foo();

//attaches "i" variable to the scope block of the for loop and not to the function foo scope.

function foo(bar){
	if (bar){
		let baz = bar;
		if (baz){
			let bam = baz;
		}
		console.log(bam);//Error
	}
	console.log(baz);//Error
};

foo("bar");


//attaches "baz" to the if statement scope block and not the function foo scope.
//basically any two pairs of curly braces, the let keyword will hijack that block.
//study the principle of least disclosure

//decide whether you're going to use let instead of var everywhere or only use let when you want to restrict the
//availability of the variable to scope blocks within a function, like an if statement.


//***problems with the let keyword***
//let keywords are not hoistable, so you have to put them at the top of your block
//refactoring can be an issue when you attempt to block scope your code, there's an added mental exercise there
//when you have to keep track of where you put your lets.
//let creates implicit scope blocks so it's harder to keep track of them.

