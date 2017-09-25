// var foo = "foo";

// (function(){
// 	var foo = "foo2";
// 	console.log(foo); // "foo2"

// })(); //donkey balls

// console.log(foo); //"foo"

// //IIFE - Immediately Invoked Function Expression
// //run-time says, "I have an immediate value. and I can immediately execute it on line 7."
// //always name your IIFE for stack tracing.

// //put all of your private functions into a named IIFE

// //Pass in a global value

// var foo = "foo";

// (function(bar){
// 	var foo = bar;
// 	console.log(foo); //"foo"

// })(foo); //you can put the function call parens inside of the encompassing parens too.
// 		//

// console.log(foo); //"foo"

//My Stuff

notIffe(2);

function notIffe(notiife){
	let nums = [notiife];
	for (let i = 0; i < 8; i++){
		if (notiife > 1 && notiife !== NaN && notiife !== undefined && typeof notiife !== "string"){
		let numsIncrement = nums[i];
		let numsCrazy = numsIncrement * notiife;
		nums.push(numsCrazy);
	} else if (notiife <= 1){
		nums = []
		nums.push("enter a bigger number than that!");
		break
	}else {
		nums = []
		nums.push("only enter a number!");
		break
		}
	}
	console.log(nums);
}

notIffe(2);

function notIffe(notiife){
	let nums = [notiife];
	for (let i = 0; i < 8; i++){
		if (notiife > 1 && notiife !== NaN && notiife !== undefined && typeof notiife !== "string"){
		let numsIncrement = nums[i];
		let numsCrazy = numsIncrement * notiife * 2;
		nums.push(numsCrazy);
	} else if (notiife <= 1){
		nums = []
		nums.push("enter a bigger number than that!");
		break
	}else {
		nums = []
		nums.push("only enter a number!");
		break
		}
	}
	console.log(nums);
}

(notIffe)(2);

(function IIFE(iife){
	let nums = [iife];
	for (let i = 0; i < 8; i++){
		if (iife > 1 && iife !== NaN && iife !== undefined && typeof iife !== "string"){
			let numsIncrement = nums[i];
			let numsCrazy = numsIncrement * iife;
			nums.push(numsCrazy);
		} else if (iife <= 1){
			nums = []
			nums.push("enter a bigger number than that!");
			break
		}else {
			nums = []
			nums.push("only enter a number!");
			break
		}
}
	console.log(nums);
})(2)

function IIFE(){
	console.log("this is redundant");
}

IIFE();






















