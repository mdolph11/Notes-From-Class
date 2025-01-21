console.log('OpenClass Notes') //How to Check if it works in your console 
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

//How to Check if it works in your console 
console.log((num1 * num2) + 10)

// Subtracting
var num1 = 10;
var num2 = 20;

//How to Check if it works in your console 
console.log(num2 - num1) //Note that the var num2 = 20; goes first before num1

// Division
var num1 = 36;
var num2 = 6;

//How to Check if it works in your console 
console.log(num1 / num2)

// Multiplication
var num1 = 9;
var num2 = 9;

//How to Check if it works in your console 
console.log(num1 * num2);

// Add the 2 variables together and display using console.log
var num1 = 10;
var num2 = 2;

//How to Check if it works in your console 
console.log(num1 + num2)

// Add then Divide
var num1 = 18;
var num2 = 36;

//How to Check if it works in your console 
console.log((num1 + num2) / 2);

//Subtract then Multiply
var num1 = 5;
var num2 = 72;

//How to Check if it works in your console 
console.log((num1 - num2) * 5);

//Comparison Operator Solution: Make a number greater than another number'
var num1 = 52;
var num2 = 42;

//How to Check if it works in your console 
console.log(num1 > num2);

//Equality Operator Solution: How to make numbers tell you their equal or not equal
var num1 = 35;
var num2 = 5;

//How to Check if it works in your console 
console.log(num1 == num2);

// Greater than or Equal To Solution
var num1 = 5;
var num2 = 3;

//How to Check if it works in your console 
console.log(num1 >= num2);

// Integer Variable Solution
let age = 26;

//How to Check if it works in your console 
console.log(tyopeof age); //How to check the number set for the age.
console.log(age); //How to make it show the age in the console.

// Example of Variables

//String Variable: A string is whats typed inside the quotation marks.

var greeting = "Hello, world!";

//How to Check if it works in your console 
console.log(greeting); //Pringts: Hello World 

var myName = "Marc";

//How to Check if it works in your console 
console.log(myName);   // prints: Marc

//Age Variable
var myAge = 38;

//How to Check if it works in your console 
console.log(myAge);   // prints: 38

// Temperature Variable
var temperature = 98.6;

//How to Check if it works in your console 
console.log(temperature);

// Boolean: A value that represents either true or false. Booleans are often used in conditional statements and logical operations.
// You DO NOT NEED quotations for a boolean
//  For example:

var isSunny = true;
var isRainy = false;

//How to Check if it works in your console 
console.log(isRainy);  // prints: false

//Undefined: A value that is assigned to a variable that has not been initialized. Undefined is also returned by functions that do not have a return statement. 
// For example:
var lastName;

//How to Check if it works in your console 
console.log(lastName); // prints: undefined

//How to Check if it works in your console 
var computerIsOn = true;
if (typeof computerIsOn !== 'undefined'){
   console.log(typeof computerIsOn);
   console.log(computerIsOn);
}
// Reassigning Variables:

// Declare a variable, assign it a value, and print it to the console
var myVariable = "Hello, world!";

//How to Check if it works in your console 
console.log(myVariable);   // this will print: Hello, world!

// Reassign the value of myVariable to "Goodbye, world!", notice the var keyword is missing
myVariable = "Goodbye, world!";

// Log the new value of myVariable to the console
console.log(myVariable); // this will print: Goodbye, world!

// What is the current year solution:
var currentYear = 2025;

//How to Check if it works in your console 
if(typeof currentYear !== 'undefined'){  //How to make it run in openclass
   console.log(typeof currentYear);
   var d = new Date();
   var n = d.getFullYear();
   console.log(currentYear === n);
   console.log(currentYear !== 2015)
}

// Set favoriteGame to another game. Reassigning:
var favoriteGame ='MW3 2012'
favoriteGame = 'MW2 2009'

//How to Check if it works in your console 
console.log(typeof favoriteGame); // Console checking what your favorite game
console.log(favoriteGame !== 'MW3 2011' && favoriteGame !== "MW3 2011") // Console checking your favorite game is the same when reassigned.

/**
 * Null: A value that represents the intentional absence of any object value. Null is often used to indicate a deliberate non-value. 
 * For example:
 */
var y = null;

//How to Check if it works in your console 
console.log(y); // logs "null"

/*
 Symbol: A unique and immutable value that may be used as the key of an Object property. Symbols are often used to create private members in Objects.
  For example:
 */
  const key1 = Symbol("key");
  const key2 = Symbol("key");
  const obj = {};
  
  obj[key1] = "value1";
  obj[key2] = "value2";
  
  //How to Check if it works in your console 
  console.log(obj[key1]); // logs "value1"
  console.log(obj[key2]); // Assuming you meant to close this line with ])

  /*
BigInt: A numeric value that can represent integers larger than 2^53 - 1. BigInts are denoted by appending the letter "n" to the end of an integer 
literal or by calling the BigInt()function. 

For example:
 */

let bigNumber = 9007199254740993n;
let largeNumber = BigInt(123456789012345678901234567890);

/*
Primitive Data Types:
Variables in JavaScript can refer to different types of data to be used in many different ways. Primitive Data Types represent data that is not an 
object, and have no methods or properties defined on them. 

The seven primitive data types in JavaScript are:

1) String - A sequence of characters, such as letters or numbers, enclosed within single or double quotes in JavaScript.

2) Number - A numeric value, which can be either positive or negative, with or without decimals.

3) Boolean - A logical value that can either be true or false.

4) Undefined - A variable that has been declared but has not been assigned a value, or a property that does not exist in an object. 
This type has one value: undefined

5) Null - A special value that represents a deliberate non-value or absence of any object value. This type has one value: null

6) Bigint - A numeric value that can represent numbers larger than the maximum safe integer of (2^53)-1, with the suffix n at the end.

7) Symbol - A primitive data type that represents a unique identifier, often used to create property keys for objects.

Note: All Primitive Types in JavaScript, except null and undefined, do have corresponding object wrapper types, and these wrapper types provide 
useful methods for working with the primitive values.

In JavaScript, we follow a naming convention called Camel Case or camelCase, where the first letter of the first word is lowercase, and the first letter of each following word is 
uppercase.
 */

//Decimal Variable Solution: Create a variable named itemPrice and set it equal to the price of your favorite item on Amazon. Do not use any $ or ,'s
 var itemPrice = 100.00;

 //How to Check if it works in your console 
if(typeof itemPrice !== 'undefined') {
   console.log(typeof itemPrice);
}

// Create a variable called your luckyNumber and set it equal to your lucky number.
var luckyNumber = 11;

//How to Check if it works in your console 
if(luckyNumber !== 'undefined'){
   console.log(typeof luckyNumber);
}

// Name a variable fullName and set it equal to 'Johnny APpleseed'
let fullName = 'Johnny Appleseed'; //When using names, the Let variable is preferred!?!?!?!

//Boolean Variable Solution: Create a variable named isHotOutside and set it equal to an appropriate value (Boolean is when your variable is set to true or false)
var isHotOutside = true;

// Create a variable called isHungry and assign the  value 'true'. Then, declare a second variable called craving and assign the value 'italian food':
let isHungry = true; // if you used 'true' and put quotations around true, it wont work because it'll turn it into a string making it not a boolean anymore.
let craving = 'italian food'

// Create a fullName solution:
/*
Create a Full Name:
Declare three variables: firstName, lastName, and fullName.
Set the firstName and lastName variables to your first and last name, respectively.
Then, set the fullName variable equal to the concatenation of the two variables with a space in between.
 */
var firstName = 'Marc';
var lastName = 'Dolph';
var fullName = firstName + ' ' + lastName;

//How to Check if it works in your console 
if(firstName !== 'undefined' && lastName !== 'undefined' && fullName !== 'undefined'){
   console.log(typeof firstName);
   console.log(typeof lastName);
   console.log(typeof fullName);
   console.log(fullName === `${firstName} ${lastName}`)
