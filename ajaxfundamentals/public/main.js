// $(document).ready(function(){
// 	$.ajax({
// 		type:'GET',
// 		url: 'http://swapi.co/api/planets/',//differed promise (after get this job, return this back to me)
// 	}).done(function(data){
// 		console.log(data)
// 		let planetsList = data.results;
// 		let planetNames = []; //square brackets means that you created an array, not a variable
// 		// for (let i =0; i < planetsList.length; i++) {
// 		// 	planetNames.push(planetsList[i].name);
// 		// }
// Challenge//iterate over the array, get the names of planets
// 		planetsList.forEach(function(planet){planetNames.push(planet.name)}); //forEach method Woohoo!
// 		console.log(planetNames);
// 	});
// });

// $(document).ready(function(){
// 	$.ajax({
// 		type:'GET',
// 		url: 'http://swapi.co/api/planets/',//differed promise (after get this job, return this back to me)
// 	}).done(function(planets){
// 		// console.log(planets.results[0].diameter)
// 		// planets.results.forEach(function(planet){console.log(planet.name)});
// 		// for( let planet in planets.results){ //returns index, don't use this one
// 		// 	console.log(planets.results[planet].name);
// 		// }
// 		// for(let planet of planets.results){ //returns the value at that index, either this one or forEach are best
// 		// 	console.log(planet.name)
// 		}
// 	});
// });

//build a loop that adds data to each cell (Planet name and starships name)
//create a search bar to search for a character with the planet name and then translate that character name to wookie
$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/planets/',
	}).done(function(data){
		let planetList = data.results
		let planetNames = [];
		planetList.forEach(function(planet){planetNames.push(planet.name});
		for (let i = 0; i < planetNames.length; i++) {
            let table = document.getElementById("planetTable");
            let row = document.createElement('tr');
            let cell = document.createElement('td');
            // cell.appendChild(document.createTextNode(planetNames[i]);
            // row.appendChild(cell)
            table.appendChild(row).appendChild(cell).appendChild(document.createTextNode(planetNames[i]));
        }
		// planetNames.forEach(function())
	});
});




