/**
  * CONTROL FLOW
  * 
  * 0. Control flow is used to make decisions and create appropriate pathways through your code. This is useful when you want your code to be 
  * applicable to multiple situations, to be able to handle different data types, or if you want to ensure that your code returns a default value when it is fed
  * otherwise unexpected data. 
  */
  
  /**
   * IF STATEMENTS
   * 
   * 1. If statements specify what code runs if an expression evaluates to true. You can use a single if statement to specify what your code should 
   * do in a particular situation. Mulitple if statements can be used together to specify what your code should do in various situations. 
   * The code block will only run if the condition after the keyword if evaluates to true. If statements consist of the keyword if, a condition
   * you want to check in parentheses, and finally the code you want to run if the condition is truthy.
   */
   
   for(var num = 10; num >= 0; num--){
    if(num % 2 === 0){
     console.log('bananas'); //This if statement prints bananas to the console if num is even. 
    }
    if(num % 2 === 1){
     console.log('odd'); // This if statement prints odd to the console if num is odd. 
    }
   } 
 /*logs 
"bananas"
"odd"
"bananas"
"odd"
"bananas"
"odd" 
"bananas"
"odd"
"bananas"
"odd"
"bananas" */

/**
 * ELSE-IF
 * 
 * 2. Else if statements can be used after an if statement to specify what code runs if an expression evaluates to true. An if statement has to precede
 * and else if statement. Else if statements require the keywords else if, a condition you want to check in parentheses, and finally the code you 
 * want to run if the condition is truthy. Like if statements, you can use as multiple else if statements to specify what your code should do in various
 * situations. 
 */
 
 var day = 'Tuesday';
 
 if(day === 'Monday'){
  console.log('Meatball Monday');
 } else if (day === 'Tuesday'){
  console.log('Taco Tuesday');
 } else if(day === 'Friday'){
  console.log('Fried Ice Cream Day');
 } // logs Taco Tuesday
 
 /**
  * ELSE
  * 
  * 3. Else statements can be used after if or else if statements. An else statement's code will run if no other condition evaluates to true. An else statement
  * is the default condition in an if-else statement. It is followed by a code block, but it does not have a condition. You can only use one else statement in 
  * an if-else statement, and it has to be at the end. 
  */
 
 day = 'Wednesday';
 
 if(day === 'Monday'){
  console.log('Meatball Monday');
 } else if (day === 'Tuesday'){
  console.log('Taco Tuesday');
 } else if(day === 'Friday'){
  console.log('Fried Ice Cream Day');
 } else (console.log("I don't know, probably a sandwich")); // logs I don't know, probably a sandwich
 // Since the value of day is Wednesday, and it doesn't match any of the conditions in the if or else if statements, the else statement's code runs.
 
 /**
  * SWITCH STATEMENTS
  * 
  * 4. Switch statements are a way to specify which code will run in various situations. They start with the keyword switch. Each situation is predicated 
  * by the keyword case, followed by the code that runs if the case is matched, and then the keyword break. Break stops the statment from continuing after
  * the appropriate code has been run. If no case is matched, the default statement will run. 
  */
 
 switch(day){  //starts with the keyword switch & a condition
  case 'Monday': //each case is preceded by the keyword case
   console.log('Meatball Monday'); //this code runs if the case matches the condition
   break;
   case 'Tuesday':
   console.log('Taco Tuesday');
   break;
   case 'Wednesday':
   console.log('Wildcard Wednesday'); //since the value of day is Wednesday, Wildcard Wednesday is logged to the console
   break;
   case 'Thursday':
   console.log('Thalad');
   break;
   case 'Friday':
   console.log('Fried Ice Cream Day');
   break;
   default: 
   console.log('take out'); //if no cases match the condition, the default code runs and take out is logged to the console
 }
 


 