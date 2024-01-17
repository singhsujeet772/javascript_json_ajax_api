// In JavaScript, the for...of loop is used for iterating over iterable objects, such as arrays, strings, maps, sets, and other iterable data structures. The loop iterates over the values of the iterable, rather than the indices. Here's the basic syntax:

// for (variable of iterable) {
//     code to be executed for each element in the iterable
// }

// variable: A variable that will be assigned the value of each element in the iterable on each iteration.
// iterable: The iterable object being looped over.

let fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
    console.log(fruit);
}


let myString = 'Hello';

for (let char of myString) {
    console.log(char);
}

