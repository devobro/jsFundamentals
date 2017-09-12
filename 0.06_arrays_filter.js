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

const users = [
	{name: 'Micheal', id: 19, gender: 'male', friends: [2, 53, 29, 210]},
	{name: 'Kyle', id: 2, gender: 'male', friends: []},
	{name: 'Christina', id: 53, gender: 'female', friends: [19, 2, 210]},
	{name: 'Sarah', id: 122, gender: 'female', friends: [19, 60, 53, 29]},
	{name: 'Juno', id: 29, gender: 'female', friends: [319]},
	{name: 'Sarah', id: 319, gender: 'male', friends: 10},
	{code: 100,    message: '0 is no a function'},
	{name: 'Erik', id: 319, gender: 'male', friends: [2, 19, 60, 29, 3]},
	{name: 'Juan', id: 210, gender: 'male', friends: [19, 60, 319]},
	{name: 'Joanna', id: 60, gender: 'female', friends: [2, 210, 103]},
	"We didn't start the fire, it was always burning since the wheel was turning",
	{name: 'Pete', id: 112, gender: 'male', friends: []},
	{name: 'Sarah', id: 3, gender: 'female', friends: [19, 2, 53, 29]}
	];


const isObj = (mixed) => !!mixed && typeof mixed === "object";
// const cleanUserList = [];

// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	// if (!!user && typeof user === "object"){
// 		if(isObj(user) && user.hasOwnProperty('name')){
// 		cleanUserList.push(user);
// 	}
// }

// function filter (array, fn){
// 	const cleanList = [];
// 	for (let i = 0; i < array.length; i++){
// 		const item = array[i];
// 		if (fn( item )){
// 			cleanList.push(item);
// 		}
// 	}
// 	return cleanList;
// }
const cleanUsers = (item) => isObj(item) && item.hasOwnProperty('name');
const cleanUserList = users.filter(cleanUsers);

console.log(cleanUserList);

//filter out the dogs
var animals = [
	{name: 'Fluffykins', species: 'rabbit'},
	{name: 'Caro', species: 'dog'},
	{name: 'Hamilton', species: 'dog'},
	{name: 'Harold', species: 'fish'},
	{name: 'Ursula', species: 'cat'},
	{name: 'Jimmy', species: 'fish'}
];
//filter accepts one argument, another function, a call-back function
//filter loops through each item and passes it into the call-back function
//it'll expect the call-back function to return either true or false
//then it'll push the items meeting this criteria to the new array (dogs, in this case)
var dogs = animals.filter(function(animal){
	return animal.species === 'dog';
});

//breakout the callback in a separate variable
var isDog = function(animal){
	return animal.species === 'dogs';
};

var dogs = animals.filter(isDog);


// var dogs = [];
// for (i = 0; i < animals.length; i++){
// 	if (animals[i].species === 'dog')
// 		dogs.push(animals[i]);
// };


