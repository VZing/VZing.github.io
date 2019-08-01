//String manipulation with methods & with operators

//STRING MANIPULATION
/* Strings can be manipulated with operators, or with methods. Methods are functions that built into the prototypical string object. 
*/

//OPERATORS
/**The plus operator (+) is used to concatenate strings. When used with two strings, or a string and another data type, it returns the a single string value with the 
 * characters of both data types together. Plus equals is another string operator that concatenates values and assigns them to a variable. 
*/

var feline = 'cat';
var canine = 'dog';
console.log(feline + canine);// logs catdog

feline += canine; // The value of feline is now catdog. 
console.log(feline); // logs catdog

//METHODS
/** Methods are functions that built into the prototypical string object. They are written after the string with a period, the name of the method, and parentheses. 
 * Since strings are a simple data type, and are therefore immutable, when something is returned while using a string method, it is always a new string. 
 */
 
//.toUpperCase() creates a new string with the uppercase version of the letters in the original string. Nothing is required in the parentheses.
var myString = 'dog';
console.log(myString.toUpperCase()); // logs DOG

//.toLowerCase() creates a new string with the lowercase version of the letters in the original string. Nothing is required in the parentheses.
console.log(myString.toLowerCase()); // logs dog

// .split() splits the string value at the specified character, in this case an empty string, and creates an array of substrings. 
console.log(myString.split('')); // The string value is split between each character. Logs ['d', 'o', 'g']

// Slice can be used to extract characters from a strings. The characters are extracted starting at the first number specified in the method's parentheses.
// The new string ends at the second index specified in the parentheses.
// If no index is specified for the end character, slice ends at the end of the string. 
var dog = feline.slice(3);
console.log(dog); // logs dog

var cat = feline.slice(0, 3);
console.log(cat);//logs cat





