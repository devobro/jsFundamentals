//takes the item from the array, does something to it and
//then puts a new thing back in the same place in the array

// const three = [1, 2, 3];
// const doubled = three.map(function (item){
// 	return item * 2;
// })
// console.log(doubled);

// var numbers = [46, 82, 168, 212, 569];

// var numbersMulti = numbers.map(function(num){
// 	return num / 42;
// })
// console.log(numbersMulti);

var finishedFullName = [];
var persons = [
	{firstname: "Devon", lastname: "Brosch"},
	{firstname: "Mandy", lastname: "Hammersmith"},
	{firstname: "Pookie", lastname: "Williams"}
	];
function concatFullName(name, i){
	var fullname = [name.firstname,name.lastname].join(" ");
	return fullname;
}
function printName(){
	finishedFullName = persons.map(concatFullName);
	// return finishedFullName;
}
printName();
console.log(finishedFullName);

const users = [
	{name: 'Micheal', id: 19, gender: 'male', friends: [2, 53, 29, 210]},
	{name: 'Kyle', id: 2, gender: 'male', friends: []},
	{name: 'Christina', id: 53, gender: 'female', friends: [19, 2, 210]},
	{name: 'Sarah', id: 122, gender: 'female', friends: [19, 60, 53, 29]},
	{name: 'Juno', id: 29, gender: 'female', friends: [319]},
	{name: 'Erik', id: 319, gender: 'male', friends: [2, 19, 60, 29, 3]},
	{name: 'Juan', id: 210, gender: 'male', friends: [19, 60, 319]},
	{name: 'Joanna', id: 60, gender: 'female', friends: [2, 210, 103]},
	{name: 'Pete', id: 112, gender: 'male', friends: []},
	{name: 'Sarah', id: 3, gender: 'female', friends: [19, 2, 53, 29]}
	]

// const numbers = ['20', '10', '50', '20'];

// const actualNums = numbers.map(function(item, index, array){
// 	return parseInt(item);
// });

// console.log(actualNums);

// const names = [];

// for (var i = 0; i < users.length; i++) {
// 	var user = users[i];
// 	names.push(user.name);
// };

// console.log(names);

const getFriends = (user) => user.friends;
//This lambda function equals this
// function getFriends(user){
// 	return user.friends;
// };

// function getName(user){
// 	return !!this[user.name] ? this[user.name] : user.name;
// }

// const friendList = map(users, getFriends);

const friendList = users.map(getFriends);
//you can put an array into the argument and then change some of the values that you get from
//the array that you're mapping
// const friendList = users.map(getName, {Michael: 'Mike', Christina: 'Chrissy'}); 
console.log(friendList);
// the long way to write out .map
// function map(arrayIn, fn) {

// 	const arrayOut = [];

// 	for (var i = 0; i < arrayIn.length; i++) {
// 		const item = arrayIn[i];
// 		arrayOut.push(fn(item) );
// 		}
// 		return arrayOut
// };



