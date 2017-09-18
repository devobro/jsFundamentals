var global = "global";

console.log(global);

function local(loc){
	console.log(loc);
	console.log(global);
	var global = "local";
	console.log(global);
};

console.log(global);

local("This is local.");

console.log(global);

