/**
  * DATA TYPES:
  * 0. Javascript includes primitive/simple data types and complex datatypes. Each data type has particular properties and can be used with various operators.
  * 1. Simple data types include: numbers, strings, booleans, undefined, null, NaN, infinity, and -infinity. Simple data types represent only one piece of one type of data.
  * 2. Complex data types include functions, arrays, and objects. Complex data types can hold multiple pieces of data of various types, and can even hold other complex data types.
  *
  */
  
  //Differences between simple & complex data types:
  
  /**
   * MUTABlE v. NONMUTABLE
   * 
   * 1. Simple data types are immutable, which means that the data itself cannot be changed. When operators are used on simple data types, new data is created, rather 
   * than changing the existing data.
   * 2. Complex data types are mutable, meaning that they can be changed. A collection can be changed by adding or removing elements. 
   */
   
   /**
    * COPY v. REFERENCE
    * 
    * 1. Simple data types are directly copied when they are assigned to a second variable. When a variable is assigned to the contents of a another variable that contains
    * a simple data type, a copy of the original data is created and assigned to the new variable. 
    * 2. Complex data types are copied by reference. When a variable is assigned to the contents of another variable that contains a complex data type, it points at, or creates
    * a map to the data contained in the other variable. 
    */
   
   //direct copy with a simple data type
   var x = 3; //x is assigned to 3.
   var y = x; //y is assigned to x's contents, 3. 
   x = 44; // x is reassigned to 44. 
   console.log(y); // y is still assigned to 3, even though x has been reassigned. 
   
   //copy by reference with a complex data type.
   var z = {number: 67, string: 'what', array: [0, 1, 2, 3, 4]}; // z is assigned to an object that holds various data types.
   var a = z; // a is assigned to z's contents. 
   z = [1, 2, 3]; // z is reassigned to an array.
   console.log(a);//a's value is still the object that was originally assigned to z
   console.log(z);// z's value is the array to which it has been reassigned
   
   //Simple data types:
   
   //Numbers
   /**
    * Numbers are simple data type that include integers and numbers with decimals. They are often used with arithmetic operators.
    */
    console.log(11 % 2); //logs 1, which is the remainder after 11 is divided by 2
    
    //Strings
    /**
     * Strings are a simple data type that include all text, such as letters, words, and sentences. Strings have to be surrounded by
     * single or double quotes, otherwise they appear to be undeclared variables. They can be concatenated with the plus sign operator (+).
     */
     
     var sandwich = 'peanut butter' + ' & ' + 'jelly'; //sandwich equals 'peanut butter & jelly'
     
     //Booleans
     
    /**
     * Booleans are a simple data type that are either true or false. The boolean values true and false do not need to be typed with single or
     * double quotes.
     */
     
     true; // This is a boolean value.
     "true"; // This is a string.
     
     //Undefined
     
     /**
      * Undefined is the default value of a variable after it has been declared, but before it has been defined. Undefined does not require quotations
      * when it's typed. 
      */
      
      var myVar; //myVar's value is undefined. 
      
      //Null
      
      /**
       * Null indicates the intententional absence of a value. It's essentially a placeholder. Like booleans and undefined, null also does not require
       * quotations when it's typed.
       */
       
       //NaN
       
       /**
        * Nan stands for Not a Number. When compared to other values, including NaN, it will always compare unequally. 
        */
        //NaN === NaN; //This would evaluates to false if it were not commented out.
        
        //Infinity & -Infinity
        
        /**
         * Infinity is greater than any other number in Javascript. It always evaluates as greater than other numbers. When it is used with arithmetic
         * operators, it returns Infinity. 
         * -Infinity is the opposite of Infinity. Is is lower than any other number in Javascript. It always evaluates as lower than other numbers. 
         * When it is used with arithmetic operators, it returns -Infinity. 
         */
         
         Infinity + 4; //returns Infinity
         Infinity > 92; //returns true
         
         -Infinity + 4; //returns -Infinity
         -Infinity < -1012434; //returns true
         
   //Complex data types:
   
   //Arrays
   
   /**
    * An array is a complex data type that is an ordered collection. Each element in an array has an index value. These values are counted starting from zero.
    * It can hold any data types. Arrays can be use many built-in methods. 
    */
    // .push() can be used after the name of an array to add an item to the end of the array
    
    var myArr = [];
    myArr.push('dog'); // myArr now looks like ['dog']
    
    // .unshift() can be used to add items to the beginning of an array
    
    myArr.unshift('cat'); //myArr now looks like ['cat', 'dog'];
    
    // .pop() can be used to remove an item from the end of an array
    
   myArr.pop();// myArr now looks like ['cat']
   
   // .shift can be used to remove an item from the beginning of an array
   
   myArr.shift(); // myArr is an empty array: []
   
   // .join() can be used to join the elements of an array into a string. 
   //If no spacing character is specified  in the parentheses, the new string will be returned with a comma between each element.
   
   var myOtherArr = ['This', 'is', 'my', 'other', 'array'];
   myOtherArr.join(); // returns This,is,my,other,array
   myOtherArr.join(' ');// By using a space in quotes in the parentheses after the method, "This is my other array" is returned.
   
   // .includes() can be used to check if an array includes a particular value
   myOtherArr.includes('my'); //returns true
   
   // .indexOf() can be used to find the index position of the first occurence of the specified element. -1 is returned if the element is not found.
   myOtherArr.indexOf('my');// returns 2
   
   //Objects
   /**
    * An object is a complex data type that is an unordered collection. Values are stored as key/value pairs. The keys are strings that do not need to be written with
    * quotations, and the values can be any data type. Objects can use built-in methods. 
    */
    
    // Object.keys() is used to get an array of an object's keys. The name of the object whose keys you want to retrieve goes in the parentheses. 
    var myObj = {jedi: 'Luke Skywalker', sith: 'Darth Vader'};
    Object.keys(myObj);// returns ['jedi', 'sith']
    
    // Object.values() is used to get an array of an object's values. The name of the object whose values you want to retrieve goes in the parentheses.
    Object.values(myObj); // returns ['Luke Skywalker', 'Darth Vader'];
    
    // .hasOwnProperty() is used with an object to determine if the object directly has the property that you are looking for, or if it is inheirited.
    myObj.hasOwnProperty('jedi');//returns true
    
    //Functions
    /**
     * A function is a complex data type that is a reusable block of code. Functions can be passed to other functions, stored in other complex data types,
     * and returned from other functions. This makes them first class objects.  Functions can be named or anonymous. The basic building blocks of a function 
     * are the keyword function, parameters inside of parentheses, and code within curly braces.
     */
     
     function myFunc(a, b){
      return a + b;
     }
     myFunc(1000, 5); //calling the function with arguments returns 1005
