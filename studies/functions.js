/**
  * FUNCTIONS
  * 
  * 0. Functions are self-contained blocks of code. In Javascript, they are also first class objects, meaning that they can be stored in a variable or collection
  *    and passed into or returned from another function. 
  * 1. Functions are defined by their return statements. The return statement determines how a function affects any other parts of a program or produces
  *    a result that is usable by a computer. The return statement is the function's output, whereas a console log is just a side effect. 
  * 2. The essential parts of a function are the function keyword, parentheses that may or may not hold parameters, and the code block.
  * 3. A named function has a name after the function keyword. 
  * 4. Otherwise, a function can be stored in a variable as a function expression. To create a function expression, declare a variable and assign it to a function
  *    written with the function keyword, parentheses that may or may not hold parameters, and the function body. 
  * 5. After a function is declared, or typed out, it has to be executed, or called in order to use it. A function declaration or expression can be called by writing 
  *    its name, followed by parentheses. These parentheses should contain the arguments that you want to pass to the function. 
  * 6. When a function is declared, the variables in the parentheses are called parameters. These are placeholders for the arguments that you will pass to it when
  *    you call it. In the named function declaration below, a and b are parameters and 18 and 7 are arguments. The arguments are what the function evaluates when it runs. 
  * 7. A function does not have to have parameters, or take inputs. The number of parameters specifies the number of expected inputs. However, you can use rest parameters
  *    to indicate that your function can take a variable number of parameters. If a function is passed more arguments than it can immediately use, these are stored
  *    in a temporary array and passed to the function one by one. 
  */
  
  function subtract(a, b){ //named function declaration
      return a - b;
  }
  
  subtract(18, 7);  // function call. returns 11. 
  
  var multiply = function(c, d){ //function expression 
      return c * d;
  };
  
  multiply(4, 3); //function call. returns 12. 
  
  function hello(){ //function that does not have any parameters or return statement
    console.log(hello);
  }
  
  hello(); //logs hello
  
  /**
   * 8. Scope determines what parts of your code can access other parts of your code. A variable of any type declared outside of a function or other code block
   *    can be accessed from anywhere in your code. This is the global scope. It is also the parent scope of any other scopes which may be inside of if/else blocks
   *    or function blocks. A variable declared inside of a function is not accessible outside of that function. Const and let variables declared inside of if/else
   *    loop code blocks are not accessible outside of those blocks, but variables declared with var are accessible outside of if/else and loop code blocks. Variables
   *    declared in blocks are the child scope. The child scope can access the parent scope, but the parent scope cannot access the child scope.
   * 9. When a value from the parent scope is accessed from inside of a child scope, a closure is created. This can be used to preserve data and use it later.
   *    Closure are useful for creating privacy for data by storing it only in child scope. This ensures that it cannot be accessed without calling specific functions
  */
  
  let b = 3; //Variable b is declared and initialized in the parent scope.
  function add(a){
      var c = 19; // Variable c is declared and initialized in the child scope.
      return a + b; //Variable b's value can be accessed in the child scope. This creates a closure.
  }
  
  add(4);// returns 7
 // console.log(c); //Variable c's value cannot be accessed in the parent, or global, scope. Trying to log the value of c throws a reference error. 