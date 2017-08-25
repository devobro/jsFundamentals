let i = 4;
console.log(i);
(function(){
	var arraigh = [];
	arraigh.push(i, i + 1, i + 2);
	console.log(arraigh[0]);
	console.log(arraigh[1]);
	console.log(arraigh[2]);
})();
console.log(i);