//In JavaScript, the forEach method is used to iterate over the elements of an array. It is a built-in method that simplifies the process of looping through the array and executing a function for each element. Here's the basic syntax:

// array.forEach(function(currentValue, index, array) {
//     code to be executed for each element
// });

// currentValue: The current element being processed in the array.
// index: The index of the current element being processed.
// array: The array that forEach is being applied to.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
});

numbers.forEach(number => console.log(number));

// The forEach method provides a clean and concise way to iterate over arrays, but keep in mind that it cannot be used with other iterable objects. For iterating over the properties of an object or other iterable structures, you might want to use other constructs like for...of or for...in.
