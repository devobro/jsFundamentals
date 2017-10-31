//This method returns an array containing all own properties' names (enumerable
//or not) of an object
//study this more, I don't quite get it

var object = {
	faces: ["big faces", "little faces", "round faces", "square faces"],
	butts: {
		bigfeet: ["your mom's feet", "your aunt's feet", "your feet"],
		littlefeet: ["your dog's feet", "your parakeet's feet", "your hamster's feet"]
	}
}

function listAllProperties(o){
	var objectToInspect;
	var result = [];

	for (
		objectToInspect = o;
		objectToInspect !== null;
		objectToInspect = Object.getPrototypeOf(object)) {

		result = result.concat(Object.getOwnPropertyNames(object));
	}

	return result; 

}

listAllProperties(object);