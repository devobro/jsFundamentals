/*

for Loop
---------

*/

// initialize var, have a boolean expression;
// for ( var i = 0; i < 10; i++) {
// 	console.log(i);
// }

// challenge using a for loop count to 20 by 2's

// for (var i = 0; i < 22; i += 2){
// 	console.log(i);
// }

// best practice?
// var name = "Kenn";

// for(var i = 0 ; i < name.length; i++){
// 	console.log(name[i]);
// }

/*

while loop
----------

do while loop
-------------
runs at least once

*/
// boolean expression 
// var j = 0;

// while (j < 5){
// // step through the loop
// 	j++;
// 	console.log(j);
// }

// while (true) {

// 	console.log("runs once");
// 	return false;
// }

//challenge create a while loop that counts to 100 by 10's
// var i = 0;
// while (i != 100) {
// 	i += 10;
// 	console.log(i);
// }

var studentName = "&jdsak;faifhdafghakfdsajfk";
var capSN = " ";
//     lcv       collection
// for (var l in studentName) {
// 	while (l < 1) {
// 		console.log(studentName[l].toUpperCase() + studentName.substring(1,1000));
// 		l++;
// 	}
// }

for (var l in studentName){
	if(l == 0){
		capSN = studentName[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
}
console.log(capSN);
