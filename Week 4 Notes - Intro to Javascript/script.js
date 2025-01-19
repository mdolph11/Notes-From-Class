// This is a Single-Line Comment
/*
This a Multi-Line Comment
 */

// 01-07-25 Class: Intro To Javascript (Single Line Comment, can use CTL + / to uncomment & recomment code)
 /*
 Javascript is like the nervous system, it's what gives a webpage functionality. It you make a button on your HTML page and style it with CSS, 
 you'll need to write code in Javascript for that button to actually make it work properly. (Multi-Line Comment)
  */

 // Var Examples:

 // To declare a Variable you'll use the sintext var name = "Name"
 var name = "Macadelic"; // Example of declaring a "name" using var
 console.log(name); // Example of how to output this "name" to your terminal/console. "Name" is what you call a string.
 
 
 // var allows redeclaration 
 
 var name = "Stitch";
 console.log(name); //Output: Stitch
 
 
 // Let Examples: 
 
 let language = "Javascript" //Declares a language variable using "let"
 console.log(language); // Output: Javascript
 
 // let language = "Python" // Cannot stack "let" variables as you can with the "var" variable
  
 // how to make full names appear on the console
var firstName = "Marc";
var lastName = "Dolph";
var fullName = firstName + " " + lastName;
console.log(fullName);
 
  /*
Vocabulary Terms:
Comparison Operator - Used to compare two values and returns a value of true or false. 
Examples of comparison operators in JavaScript include greater than (>), less than (<), greater than or equal to (>=), and less than or 
equal to (<=).

Concatenate - The process of joining two or more strings together to create a new, longer string. 
In JavaScript, you can concatenate strings using the + operator.

Equality Operator - An equality operator is used to compare two values for equality and returns a boolean value of true or false. 
The double equals sign (==) is used to check for loose equality, which means that the two values are equal in value but not necessarily in type. 
The triple equals sign (===) is used to check for strict equality, which means that the two values are equal in value and type.

Math Operations - JavaScript provides a set of built-in math operations that can be used to perform calculations on numbers, such as addition (+), 
subtraction (-), multiplication (*), division (/), and modulo (%), among others.

Null: The Null type represents an intentional absence of any object value, and has exactly one value: null. 
In JavaScript, null is a primitive value and is not an object, but can be used where an object is expected in JavaScript.

Number: A data type that represents both integers and floating-point numbers.

Strict Equality Operator: The Strict Equality Operator, or ===, is a comparison operator that tests if two values are equal, 
without performing type coercion. If the two values being compared are of different types, the result will be false.

String: A data type that represents a sequence of characters. Strings can be created using single or double quotes, and can be concatenated 
using the (+) operator.

Type coercion: The automatic or implicit conversion of a value from one data type to another by the programming language, often in order to perform
an operation or comparison

Undefined: The Undefined type represents a variable that has been declared but has not been assigned a value. It only has one value: undefined

Variable - A container that holds a value, which can be a string, number, boolean, or other data type.

var- A keyword that was originally used to declare variables in JavaScript.

let- A keyword that is now used primarily in place of var to  declare variables in a local scope.
   */

// Multiplying then Add Solution
var num1 = 15;
var num2 = 2;
console.log((num1 * num2) + 10)

// Subtracting
var num1 = 10;
var num2 = 20;
console.log(num2 - num1) //Note that the var num2 = 20; goes first before num1

// Division
var num1 = 36;
var num2 = 6;
console.log(num1 / num2)

// Multiplication
var num1 = 9;
var num2 = 9;
console.log(num1 * num2);
