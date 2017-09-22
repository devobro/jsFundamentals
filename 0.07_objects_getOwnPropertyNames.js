//This method returns an array containing all own properties' names (enumerable
//or not) of an object
//study this more, I don't quite get it

var object = {
	faces: ["big faces", "little faces", "round faces", "square faces"],
	butts: {
		bigbutts: ["your mom's butt", "your aunt's butt", "your butt"],
		littlebutts: ["your dog's butt", "your parakeet's butt", "your hamster's butt"]
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