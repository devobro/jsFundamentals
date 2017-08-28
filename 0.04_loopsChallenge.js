// Bronze - create a loop that counts to 20 by 2s.

for (i = 2; i < 21; i += 2){
	console.log(i);
};
// 						for AND while - that's next-level tryhard! :^D
var i = 0;
while (i < 20){
	i += 2;
	console.log(i);
};

// Silver - create a for loop that counts to 100 by 25s. Get to 50 and print "Halfway there!"

for (i = 25; i <= 100; i += 25){
	if (i === 50){
		console.log("You're at " + i + "; you're halfway there!")
	} else {
		console.log(i);
	};
};

// Gold - Create a for loop that counts to 10. Print each number, 1 through 8, burt print 9 and 10 as "nine" & "ten".

for (i = 1; i <= 10; i++){
	if (i == 9){
		console.log("nine");
	} else if (i == 10){
		console.log("ten");
	} else {
		console.log(i);
	};
};
// too easy! I hope there will be subsequent, more challenging challenges to encourage me to practice. ;^D