//Objects

// let food = {
// 	pies: ['Pecan', 'Blueberries', 'Cherry', 'Key Lime'],
// 	getPies: function() {
// 		console.log(this);
// 		return this.pies;	
// 	}
// }

//Challenge iterate over the pie array and print out each pie, and add 'pie'
// pies:, pieNames:, etc. are keys
// after colons are elements or methods.

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	pieNames: [],
	getPies: function(){
		return this.pies;
	},
	addPie: function(){
		return food.pies.forEach(function(newPie){console.log(newPie + " pie")})
	},
	getPieNames: function(){
		this.pies.forEach(function(pie){food.pieNames.push(pie + ' pie')})
		return this.pieNames;
	}
}
console.log(food.getPieNames());

//Create a method inside of the object food that appends ' pie' to the list

