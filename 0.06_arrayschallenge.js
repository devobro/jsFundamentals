// Bronze -- Create an array of your favorite hobbies

let favHobbies = ["Video Games", "Woodworking", "Coding", "Writing SciFi", "Cooking"];

//Silver -- Create an array of awesome cars, make a loop that prints them

// let aweCars = ["Aston Martin", "Corvette", "Bentley", "Lamborghini", "Porsche"];

// for (i = 0; i < aweCars.length; i++){
// 	console.log(aweCars[i]);
// };

//Gold Challenge - Create an array where each element is an array of different lists

let myCarsPetsAndBooks = {
	cars: ["Prius", "Ninja"],
	pets: ["Luna", "Levi"],
	books: ["Isaac Asimov", "HTML and CSS", "Python Crash Course", "Algebra and Trigonometry"],
	everything: [],
	getCars: function(){
			this.cars.forEach(function(newCar){myCarsPetsAndBooks.everything.push(newCar)});
			return this.everything;
	},

	getPets: function(){
			this.pets.forEach(function(newPet){myCarsPetsAndBooks.everything.push(newPet)});
			return this.everything;
	},
	getBooks: function(){
			this.books.forEach(function(newBook){myCarsPetsAndBooks.everything.push(newBook)});
			return this.everything;
			// console.log(this.everything);
	}

} 

myCarsPetsAndBooks.getBooks();
myCarsPetsAndBooks.getPets();
myCarsPetsAndBooks.getCars();

console.log(myCarsPetsAndBooks.everything);






