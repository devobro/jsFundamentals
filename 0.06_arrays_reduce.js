//take an array and do something with it, then pass the result
//to the next iteration
//number at the end is the initial result
//if no number there, then the initial result is the first item in the array

const sum = [1, 2, 3].reduce(function (result, item){
	return result + item;
},0);