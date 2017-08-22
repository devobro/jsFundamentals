let input = document.getElementById("input");
let output = document.getElementById("output");
// console.log(input.value);

function capitalize(){
	let newName = "";

	for (let l in input.value) {
		if (l == 0) {
			newName = input.value[l].toUpperCase();
		} else if (input.value[l-1] === " ") {
			newName += input.value[l].toUpperCase();
		} else {
			newName += input.value[l].toLowerCase();
		}
	}
	output.innerHTML = "Capitalized Name: " + newName;
	listName(newName);
	document.getElementById("input").value = null;
}


// Challenge: find out how to have a conditional target the 'enter key' so that once it's pressed it can submit the form

window.onkeypress = function(keyPress){
	if (keyPress.keyCode == 13) {
		return capitalize();
	}
}

function listName(name) {
	let list = document.getElementById("nameList");
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(name));
    list.appendChild(entry);
}