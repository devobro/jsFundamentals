//does something (function) for each item in array
//

[1, 2, 3].forEach(function(item, index){
	console.log(item, index);
}); 


var numbers = [4, 9, 16, 25];

// numbers.forEach(function(num, i){
// 	console.log(Math.round(num / (num + 7)));
// 	// console.log(num);
// });
var sum = 0;

numbers.forEach(function(num, i){
	sum += num;
	console.log(sum);
})

numbers.forEach(function(num, i){
	numbers[i] = num * 42;
	console.log(numbers);
})