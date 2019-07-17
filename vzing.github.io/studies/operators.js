/**
 * OPERATORS:
 * 0. Operators are used to manipulate data. 
 * 1. Operators are categorized by how many operands they require. There are many unary and binary operators and
 *    one ternary operator. 
 */
 
 // Unary operators:
 /** 
  * Unary operators require only one operand. Unary operators are used before or after the operand, depending on the particular operator.
  * Some unary operators are symbols, like - (denotes a negative number), ++ (adds one to a number),  ! (denotes the opposite of whatever follows it).
  * Assignment operators, comparison operators, and logical operators are also written as symbols before or after an operand. Other unary operators are
  * phrases like typeof, instanceof, and delete. 
  */
  
   // ! The bang operator in front of a value means "not". 
 
 !3 // This means "not 3"
 
 // - A minus sign in front of a number gives it a negative value.
 
 -3 // negative 3
 
 // ++, -- Double plus signs after a number returns the number, plus 1. Double minus signs after a number return the number, minus 1.
  
 var z = 3;
 z--; // This value is 2
 
  var y = 3;
  y++; // This value is 4
 
 /** typeof is used before a value. It can reliably determine the data type of strings, numbers, booleans, functions, and undefined but will return 'object' when used with 
  * arrays, objects, dates, or null. 
  */
  
var a = false;
var b = [1, 2, 3];
typeof a; // returns boolean
typeof b; // returns object
 
 //delete is used to delete a value on an object. It removes both the object's property and its value. 
 
 var myObj = {name: 'Veronica', age: 28, hair: 'pink'};
 delete myObj.hair;
 console.log(myObj); // prints {name: 'Veronica', age: 28};

 // Binary operators:
  /** 
  * Binary operators require two operands that surround the operator.
  */

 // Assignment operators assign a value to a variable. The assignment operator is an equal sign that is used to assign a value to a variable. 
 
 var a = 'A'; // The variable a's value is A
 
 // +=, -=, *=, /*, and %= are used to do mathmatical operations while assigning a value to a variable.
 
 var b = 7;
 b += 8; //returns 15. The value of b is now 15. 
 
 // Comparison operators compare two values. They can be used to check if one value is greater than another, or if two values are equal or unequal. 
 
   // == means loosely equal. It can be used to compare two values and allows for type coercion. This means that the operands' data type is not taken into account.
   
   '3' == 3 //returns true
   
   // === means strictly equal. It checks if two values are exactly the same.
   
   '3' === 3 //returns false
   
   // != Checks if two values are not the same and ignores data type. 
   
   '3' != 3 // returns false
   
   // !== Checks if two values are not the same while taking data type into account.
   
   '3' !== 3 // returns true
   
   // >, <, >=, <= Greater than, less than, greater than or equal to, and less than or equal to can all be used to compare two values
   
   11 > 5 + 6 // returns false
   
   11 >= 5 + 6 // returns true

 /** Logical operators that represent and and or work similarly in an expression as they do in a sentence. &&  (and) can be used between two operands 
  * to indicate that a boolean expression should return true only if both the values that surround it are true. || (or) will return true if either value is true. 
 */
 
if (3 > 4 && 5 < 6){
  console.log('Both expressions are true');
} else console.log(false); //logs false

if (3 > 4 || 5 < 6){
  console.log('At least one expression is true');
} else console.log(false); // logs At least one expression is true

  
 //Arithmetic operators set up mathmatical expressions that the Javascript compiler can solve.
 
 // When + is used with two numbers, it adds them together.

// - subtracts, * multiplies, / divides

// The modulus symbol gives the remainder after division

35 % 10; //returns 5, since after dividing 35 by 10, the remainder is 5. 
 
 // Ternary operator:
 
 /** The ternary operator, also known as the conditional operator, takes three operands. If the expression evaluates to true, the operand on the left
  *  of the colon is returned, otherwise the the operand on the right side is returned. Using the ternary operator looks like: expression ? value1 : value 2.
 */
 3 > 4 ? true : false; // evaluates to false

 var amount = 24;
 var greaterThanTen = amount > 10 ? 'yep' : 'nope';
 console.log(greaterThanTen); //logs yep
 
