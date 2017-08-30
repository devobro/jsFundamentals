//Bronze - Create a person object with different properties describing them

let person = {
	height: ["6 feet"],
	weight: ["150 pounds"],
	species: ["human"],
	getHeight: function(){
		return this.height;
	},
	getWeight: function(){
		return this.weight;
	},
	getSpecies: function(){
		return this.species;
	}
}

//Silver - add methods which return the values of the properties: added get* methods!

console.log(person.getHeight());
console.log(person.getWeight());
console.log(person.getSpecies());


//Gold
