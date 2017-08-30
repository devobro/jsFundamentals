//takes the item from the array, does something to it and
//then puts a new thing back in the same place in the array

const three = [1, 2, 3];
const doubled = three.map(function (item){
	return item * 2;
})
console.log(doubled);

