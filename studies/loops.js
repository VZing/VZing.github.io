/**
  * LOOPS:
  * 
  * 0. Loops are used to access every element in a collection. Collections are arrays and objects.
  *    There are three main types of loops: while loops, for loops, and for-in loops. They have a few parts: 
  *    a start condition, a stop condition, an incrementer or decrementer, and a block of code to be executed 
  *    while the condition is true. 
  * 
  * 1. For loops execute a block of code a number of times. They are used to loop over arrays. To use a for loop, 
  *    create a variable that represents the index of the array where you want to start looping. Then, create a stop 
  *    condition where you want to stop looping. Finally, increment or decrement the variable's value so that you eventually 
  *    reach the stop condition. After the loop has been set up, your code goes behind this in curly braces. 
  */
  
  let arr = ['blue', 'red', 'pink', 'pineapple', true, 15]; // This is the array that we will loop over
   // Looping forward through an array
   // i is the variable that we create to represent where the loop is in the array. i represent's the current index in the array. 
   // i is initialized to the value of zero, which is where we want to start counting from to loop forward through the array. 
   // arr.length is the stopping point for the loop. It stops looping when i becomes the same value as the length of the array.
   // i++ increments the value of i by one. Without incrementing the index, the loop would not be able to access all of the 
   // elements in the array and the code would run indefinitely, creating an infinite loop.
   
  for(let i = 0; i < arr.length; i++){ 
      if(typeof arr[i] === 'number'){  
          console.log(i); //logs 5. This is the index of the only number data type in the array that we tested.  
      }
  }
  
  // Looping backward through an array
  // i is the variable that we create to represent where the loop is in the array. i represents the current index in the array. 
  // i is initialized to the value of arr.length-1, which equals the index of the last item in the array. We are starting counting from
  // the last element in the collection. 
  // 0 is the stopping point for the loop. It stops looping when i has been decremented until it is equal to 0.
  // i-- decrements the value of i by one. Without decrementing the index, the loop would not be able to access all of the elements in the array
  // and the code would run indefinitely, creating an infinite loop.
  
  
  for(let i = arr.length-1; i >= 0; i--){
   if(typeof arr[i] === 'string'){
    console.log(arr[i]); // logs pineapple, pink, red, blue. These are all of the string data types in arr in the reverse order of how they appear in the original array
   }
  }
  
  /**
   * 2. While loops execute code while a condition is true. Like for loops, they are also used to loop over arrays. 
   *    While loops need a start condition, a stop condition, an incrementer or decrementer, and the block of code to be
   *    executed while the condition is true. While loops are similar in function to for loops, but it is easy to forget
   *    the incrementer/decrementer and accidentally create an infinite loop. 
   */
   
   //This loop counts down from 10 to zero and logs the numbers as it counts down. 
   let i = 10; //Start condition. This is where well start counting down from. 
   while(i >= 0){ //While i is greater than or equal to zero, the code will continue running
    console.log(i); //This code runs while i is greater than or equal to zero. 
    i--; //This is the decrementer. After the code runs, 1 is subtracted from the value of i. 
   }
   
   
   
   
   
   
   
   /**
    * 3. For in loops loop over the properties in an object. The for in loop starts with the for keyword, followed by the variable that will stand in for the names of 
    *    the keys as we loop through the object. This is followed by the in keyword and the name of the object we want to loop through. The final part of the for in
    *    loop is the code that you run for each key/value pair in the object. Unlike the while loop and the for loop, there is no obvious starting point or incrementer.
    *    The for in loop starts at the first key that it encounters in the object, and continues until it has accessed each key in the object. 
    */
    
   let obj = {sky: 'azure', ocean: 'cerulean', blueRaspberryIcee: 'blue'}; // This is the object that we will loop over
    //
    for(var key in obj){ 
     console.log(obj[key]); // This code logs the keys the object, one by one: azure, cerulean, blue
    } 