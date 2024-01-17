
// In JavaScript, a for...in loop is used to iterate over the properties of an object. It enumerates the properties of an object, including inherited properties from the object's prototype chain. Here's the basic syntax

// for (variable in object) {
//      code to be executed for each property
// }

// variable: A variable that will be assigned the property name on each iteration.
// object: The object whose enumerable properties will be iterated.


let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}