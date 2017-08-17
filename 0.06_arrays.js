// Arrays

// let students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']];
// console.log(typeof(students));

//Grab the nested array out of the students array and grab 'Perry' then print
// to the console "Hello Perry the Platypus."

// let nestStudents = students[6]
// console.log("Hello " + nestStudents[1] + "!!!!!" + " Mah brutha!");
// console.log("Hello" ,students[6][1], "the Platypus.")

let arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'Cheese Cake', 'Shrimp Pasta'];
//index of item / Home manh to cut / what you want to replace it with
arrOfFood.splice(1, 1, 'Blueberry Pie');
arrOfFood.splice(2, 0, 'Sweet Potato');
arrOfFood.splice(4, 2);
//prints out the value instead of the index number
// for (let l of arrOfFood){
// 	console.log(l);
// }
// arrOfFood.push('NY Style Pizza');
// for(let foodItem of arrOfFood){
// 	console.log(foodItem);
// }

arrOfFood.forEach(function(foodItem){console.log(foodItem);})
arrOfFood.forEach(function(foodItem, banana){console.log(banana);console.log(foodItem);})

//Arrays

Let students = [
			'Thomas',
			'Madyson',
			'Devon',
			'Mike',
			['Tyler', 'Jackson']];
			

