// Bind = hard binding an object to the 'this' keyword

// in this example, the 'this' keyword will always reference the 'obj' object
// this is because of the trick in line 13
// function foo() {
// 	console.log(this.bar);
// }

// var obj = { bar: "bar" };
// var obj2 = { bar: "bar2" };

// var orig = foo;
// foo = function(){ orig.call(obj); };

// foo();			// "bar"
// foo.call(obj2); // "bar"

// this solution is clunky because we have a global function hanging out

// we can instead create a bind utility

// function bind(fn,o) {
// 	return function() {
// 		fn.call(o);
// 	};
// }

// function foo() {
// 	console.log(this.bar);
// }

// var obj = { bar: "bar" };
// var obj2 = { bar: "bar2" };

// foo = bind(foo,obj);

// foo();			// "bar"
// foo.call(obj2); // ???

// this is still clunky because we had to create a global utility bind

// instead we can put the utility directly on the function prototype

// if(!Function.prototype.bind2) {
// 	Function.prototype.bind2 =
// 		function(o) {
// 			var fn = this; // the function!
// 			return function() {
// 				return fn.apply(o, arguments);
// 			};
// 		};
// }

// function foo(baz) {
// 	console.log(this.bar + " " + baz);
// }

// var obj = { bar: "bar" };
// foo = foo.bind2(obj);

// foo("baz");       // "bar baz"

// this utility is limited, however.  The MDN recommended polyfill is as follows:

// if (!Function.prototype.bind) {
// 	Function.prototype.bind = funtion (oThis) {
// 		if (typeof this !== "function") {
// 			// closest this possible to the ECMAScript 5 internal IsCallable function
// 			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
// 		}

// 		var aArgs = Array.prototype.slice.call(arguments, 1),
// 			fToBind = this,
// 			fNOP = function () {},
// 			fBound = function () {
// 				return fToBind.apply(this instanceof fNOP && oThis
// 										? this
// 										: oThis,
// 										aArgs.concat(Array.prototype.slice.call(arguments)));
// 			};
// 		fNOP.prototype = this.prototype;
// 		fBound.prototype = new fNOP();

// 		return fBound;
// 	};
// }
// try to understand that

var object = { devon: "awesome", func: func };

var devon = "brosch"

func = func.bind(object)

function func(devon) {
	this.devon = "devon"
	return this.devon
}
var brosch = func(this.devon)
console.log(brosch); //devon, not brosch
console.log(object.devon) //devon

