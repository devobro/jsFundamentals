//Every function, while executing, has a reference to its current execution context, called this.
//four rules to how the "this" keyword gets bound (all depends on call-site):
// 1. default rule: this is assigned undefined by default in strict mode or global object.
// 2. implicit binding rule: when there's an object reference at the call site, then that object
//	  becomes the "this" keyword.
// 3. if you use .call or .apply at your call site, both of those utilities take as their first
//    parameter, a 'this' binding.
// 4. if you use thew "new" keyword, then 'this' becomes bound to that new object.
//Order of precedence of the 4 rules:
// First, find the call sight, then ask the 4 questions, in order
// 1. Was the function called with the `new`? If so, use that object. (overwrites all other rules)
// If there wasn't a `new`, then ...
// 2. Was the function called with `call` or `apply` specifying an explicit 'this'? If so, use that object.
// If there was no `new`, `call`, or `apply`, then ...
// 3. Was the function called via a containing/owning object (context)? If so, use that object.
// 4. DEFAULT: global object (except strict mode, where it becomes 'undefined')


// function foo(){
// 	console.log(this.bar);
// }

// var bar = "bar1";
// var o2 = {bar: "bar2", foo: foo};
// var o3 = {bar: "bar3", foo: foo};

// foo(); //"bar1"

// o2.foo(); //"bar2"
// o3.foo(); //"bar3"

//**********************************************//

// var o1 = {
// 	bar: "bar1",
// 	foo: function(){
// 		console.log(this.bar);
// 	}
// };

// var o2 = {bar: "bar2", foo: o1.foo};

// var bar = "bar3";
// var foo = o1.foo;

// o1.foo(); //"bar1"
// o2.foo(); //"bar2"
// foo(); //"bar3"

//**********************************************//

// function foo() {
// 	var bar = "bar1";
// 	baz();
// }

// function baz() {
// 	console.log(this.bar);
// }

// var bar = "bar2";
// foo(); //???

//**********************************************//

// function foo() {
// 	var bar = "bar1";
// 	this.baz = baz;
// 	this.baz();
// }
// function baz() {
// 	console.log(this.bar);
// }

// var bar = "bar2";
// foo();             // ???

//**********************************************//
//this: new, order of precedence - proof

// function something() {
// 	this.hello = "hello";
// 	console.log(this.hello, this.who);
// }

// var who = "global", foobar, bazbam,
// 	obj1 = { who: "obj1", something: something },
// 	obj2 = { who: "obj2" };

// something(); // "hello" "global"
// console.log(hello); // "hello"        <-- OOPS!!!

// obj1.something(); // "hello" "obj1"
// console.log(obj1.hello) // "hello"

// obj1.something.call(obj2); // "hello" "obj2"
// console.log(obj2.hello); // "hello"

// foobar = something.bind(obj2);
// foobar(); // "hello" "obj2"
// fobar.call(obj1); // "hello" "obj2"

// bazbam = new something(); // "hello" "undefined"
// console.log(bazbam.hello); // "hello"

// bazbam = new obj1.something(); // "hello" "undefined"
// bazbam = new foobar(); // "hello" "undefined"

//**********************************************//

//**********************************************//

var that = "that";

function thatFunc(that) {
	this.that = "this";
	thisFunc(that)
	return that	
}

function thisFunc(that) {
	console.log(this.that) //this.that = "this" ; that = "that"
}

// thatFunc(that); // this
thisThat = thatFunc(that) 
// console.log(thatFunc(that)) //that
console.log(thisThat) //this and that? :^P











