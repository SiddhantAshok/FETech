//variable are those whose values gets changed during the execution of the program
//constants are those whose values remains same during the execution of the program

// var a = 10;
// console.log(a);
// a = 20;
// console.log(a);

// const b = 10;
// console.log(b);
// b = 20; //error
// console.log(b);

//Hoisting in JavaScript is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
// console.log(a);  //undefined on console, as variable a is hoisted to the top of the scope but not initialized yet.
// var a = 10;

// console.log(a);

// sum();

// function sum(){
//     var a = 10;
//     var b = 20;
//     console.log(a+b);
// }

//var let
//var is function scoped and let is block scoped
//var is hoisted to the top of the function and let is hoisted to the top of the block
//*var adds its variable to the window object and let does not add its variable to the window object
// abcd();

// function abcd(){
//     for(var i = 0; i<5; i++){
//         console.log(i);
//     }   
//     console.log(i); //5
// }

// abcde();
// function abcde(){
//     for(let i = 0; i<5; i++){
//         console.log(i);
//     }   
    
//     // console.log(i);  //error
// }

//Execution Context in JavaScript is an abstract concept that holds information about the environment within which the current code is being executed
//Execution Context has two phases: Creation Phase and Execution Phase
//Creation Phase: In this phase, the JavaScript engine sets up memory space for variables and functions. It is also known as the Hoisting phase.
//Execution Phase: In this phase, the JavaScript engine assigns values to variables and executes the code line by line.

//Execution Context contains 3 components: Variable Object, Scope Chain, and this
//Variable Object: It contains all the variables and functions declared in the current execution context.
//Scope Chain: It contains the current variable object and the variable object of all its parents.
//this: It refers to the current object where the code is being executed.

//lexical environment: It is a structure that holds identifier-variable mapping. It is used to determine the scope of the variable.
//lexical scope: It is a scope that is defined at the time of the code writing. It is based on the physical location of the variable declaration in the code.
//dynamic scope: It is a scope that is defined at the time of the code execution. It is based on the calling context of the function.


//How to copy reference type variables in JavaScript without changing the original value?
//There are two ways to copy reference type variables in JavaScript without changing the original value:
//Using the spread operator: You can use the spread operator to copy the reference type variable.
//Using the Object.assign() method: You can use the Object.assign() method to copy the reference type variable.
//Example:
//Using the spread operator:
// let obj1 = { name: 'John', age: 30 };
// let obj2 = { ...obj1 };
// obj2.name = 'Smith';
// console.log(obj1.name); // John
// console.log(obj2.name); // Smith

//Using the Object.assign() method:
// let obj11 = { name: 'John', age: 30 };
// let obj22 = Object.assign({}, obj11);
// obj22.name = 'Smith';
// console.log(obj11.name); // John
// console.log(obj22.name); // Smith

//What is the difference between null and undefined in JavaScript?
//null: It is an assignment value that represents the intentional absence of any object value. It is used to indicate that a variable has no value.
//undefined: It is a primitive value that represents the absence of a value. It is used to indicate that a variable has been declared but has not been assigned a value.
//Example:
// let a1 = null;
// let b1;
// console.log(a1); // null
// console.log(b1); // undefined

//What is the difference between == and === in JavaScript?
//==: It is an equality operator that compares two values for equality, after converting both values to a common type.
//===: It is an identity operator that compares two values for equality without type conversion.
//Example:
// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

//What is the difference between let and const in JavaScript?
//let: It is used to declare variables that can be reassigned new values.
//const: It is used to declare variables that cannot be reassigned new values.
//Example:
// let x = 10;
// x = 20;
// console.log(x); // 20

// const y = 10;
// y = 20; // Error: Assignment to constant variable.
// console.log(y);

//truthy and falsy values
//Falsy values: In JavaScript, the following values are considered falsy values:
//false: The boolean value false.
//0: The number 0.
//'' or "": An empty string.
//null: The null value.
//undefined: The undefined value.
//NaN: The NaN value.
//Truthy values: In JavaScript, all values are considered truthy values except for the falsy values.
//Example:
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(true)); // true
// console.log(Boolean(1)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true
// console.log(Boolean(-1)); // true

//What is Nan in JavaScript?
//NaN stands for "Not-a-Number" in JavaScript. It is a special value that represents an invalid number.
//Example:
// console.log(Number('hello')); // NaN
// console.log(0 / 0); // NaN
// console.log(Math.sqrt(-1)); // NaN

//looping in JavaScript
//for loop
//for..in loop
//for..of loop
//while loop
//do..while loop
//forEach loop
//map loop
//filter loop
//reduce loop
//Example:
//for loop:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//for..in loop:
// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//     console.log(key, obj[key]);
// }

//for..of loop:
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}

// //while loop:
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// //do..while loop:
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 5);

// //forEach loop:
// const arr1 = [1, 2, 3, 4, 5];
// arr1.forEach((value) => {
//     console.log(value);
// });

// //map loop:
// const arr2 = [1, 2, 3, 4, 5];
// const newArr = arr2.map((value) => value * 2);
// console.log(newArr);

// //filter loop:
// const arr3 = [1, 2, 3, 4, 5];
// const filteredArr = arr3.filter((value) => value % 2 === 0);
// console.log(filteredArr);

// //reduce loop:
// const arr4 = [1, 2, 3, 4, 5];
// const sum = arr4.reduce((acc, value) => acc + value, 0);
// console.log(sum);

//logical difference between for..in and for..of loop in JavaScript?
//for..in loop: It iterates over the enumerable properties of an object, including inherited enumerable properties.
//for..of loop: It iterates over the iterable objects like arrays, strings, maps, sets, etc.
//Example:
// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// const arr = [1, 2, 3, 4, 5];
// for (let value of arr) {
//     console.log(value);
// }

//What is the difference between map() and filter() in JavaScript?
//map(): It creates a new array by applying a function to each element of the original array.
//filter(): It creates a new array with elements that pass the test implemented by the provided function.
//Example:

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((value) => value * 2);
// console.log(newArr);

// const arr1 = [1, 2, 3, 4, 5];
// const filteredArr = arr1.filter((value) => value % 2 === 0);
// console.log(filteredArr);


//What is the difference between forEach() and map() in JavaScript?
//forEach(): It executes a provided function once for each array element.
//map(): It creates a new array by applying a function to each element of the original array.
//Example:
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((value) => {
//     console.log(value);
// });

// const arr1 = [1, 2, 3, 4, 5];
// const newArr = arr1.map((value) => value * 2);
// console.log(newArr);

