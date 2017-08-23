// Numbers //
// numbers can be written with decimals (maximum 14 sig figs)//
var num = 3.14159265358979;
console.log(num + .00000000000001);
//numbers can be written with exponent notation
var num1 = 6969e5;
//JavaScript will try to convert strings to numbers in all numeric operations
//except for when using "+" then it'll concatenate the strings
var num2 = "6";
var num3 = "4";
var num23 = num2 * num3;
console.log(num23);
//if you calculate a number larger than the maximum number, then js will return "infinity"
var num4 = 2;
while (num4 != Infinity){
	num4 = num4 * num4;
	console.log(num4);
}
//Put "0x" in front of hexadecimal to convert to decimal
var num5 = 0xAA289;
console.log(num5);

//Bronze Challenge//
var myAge = 39;
var birthYear = 1978;
var gradYear = 1996;
var numOfBros = 2;
console.log(myAge,birthYear,gradYear,numOfBros);

//Silver Challenge//
var agePlusBirth = myAge + birthYear;
var gradTimesBros = gradYear * numOfBros;
var remainNum = agePlusBirth % gradTimesBros;
console.log(agePlusBirth, gradTimesBros, remainNum);

//Gold Challenge//
var gummyWorm = "Gummy Worms"
console.log("Is it true that Gummy Worms are not numbers? -> " + isNaN(gummyWorm));
