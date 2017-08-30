//new loop in ES6 replaces for-in and forEach()
//only works with iterable values
// let iterable = ['a', 'b'];
// for (let x of iterable){
// 	console.log(x);
// }

for (let x of ['a', 'c', 'b']){ //break stops the loop and goes to the next line
	if (x.length === 0) break;
	if (x.length === 2) continue;//continue skips the next iteration and continues
	console.log(x);
}




