// when we put the 'new' keyword in front of any function call
// it magically turns that function call into a constructor call

// function foo() {
// 	this.baz = "baz";
// 	console.log(this.bar + " " + baz);
// }

// var bar = "bar";
// var baz = new foo();
// console.log(baz.baz) // baz because of implicit 'return this'

//4 things occur when 'new' is put in front of a function call
//  1. A brand new empty object is created.
//**2. That object gets linked to a different object (more on that during prototyping discussion)
//  3. That brand new object gets bound to the 'this' keyword for the purposes of that function call.
//  4. If that function doesn't otherwise return something, it will implicitly insert a 'return this'

function devon(devon) {
	this.devon = johnny
	this.brosch = "Johnny";
}

var johnny = "Johnny"
var brosch = new devon();
console.log(brosch) //haha, returns devon { devon: 'Johnny', brosch: 'Johnny'}
