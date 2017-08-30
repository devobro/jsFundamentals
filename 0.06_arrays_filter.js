//checks each item in the array against soe sort of condition
//to see if it's true or false.
//if true it'll put the item back in the array
//if false, it'll remove the item from the array (the new array)

const ints = [1, 2, 3];
const evens = ints.filter(function (item){
	return item % 2 === 0;
})
console.log(evens);
console.log(ints);
