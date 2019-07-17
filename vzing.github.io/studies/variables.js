/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//Hoisting
/**
 * Hoisting occurs directly before code is executed. Functions, followed by the names of  variables declared with var, 
 * are brought to the top of their scope. Functions can be used before they are declared in code because the entire function is hoisted.
 * If the names of var variables are used in the code before they are declared, their value is undefined, but no errors are thrown. 
 */
 console.log(fruit); //logs undefined because only the name of the variable is hoisted
 var fruit = 'pineapple';
 
//Var
/**
 * When a variable is created with the var keyword, that keyword can be reassigned. It is hoisted to the top if its scope before
 * the code runs, so reference errors are not thrown if it is referenced before it is defined. It is scoped to functions, but not to
 * code blocks in if statements or loops. This means that any keyword declared with var outside of a function is accessible globally.
 */
 console.log(tropicalFruit); //logs undefined
 var tropicalFruit = 'pineapple';
 tropicalFruit = 'papaya';
 console.log(fruit);//logs papaya since variables declared with var can be reassigned
 
 //Let
 /**
  * Variables created with let are also reassignable. They are not hoisted, so referencing a variable declared with let before it defined will
  * result in an error. Variables declared with let are scoped to if blocks, loops, and function blocks. They are only accessible globally 
  * if they are declared in the global scope. 
  */
  
  // console.log(veg); // would throw reference error since variable names declared with let are not hoisted if it were not commented out
  let veg = 'broccoli';
  veg = 'spinach';
  console.log(veg);// log spinach since variables declared with let can be redefined
  
  //Const
  /**
   * Variables created with const cannot be reassigned, and are not hoisted. Like let, variables declared with const are scoped to if blocks, 
   * loops, and function blocks. They are are only accessible globally if they are declared in the global scope. 
   */

// console.log(drink); // throws reference error since variable names declared with const are not hoisted
const drink = 'coffee';
// drink = 'tea'; // throws TypeError: Assignment to const variable.