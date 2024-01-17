//5. How to use objects and arrays in JavaScript code to output data

const obj1 = {
    "first": "Laurence",
    "id": 1000,
    "courses": ["html", "css", "js", [1, 2, 3]],
    "first": "Mike",
    "first": "Laurence"
};
obj1.first = "John";
obj1.courses[0] = "json";
obj1.courses[10] = "html";
console.log(obj1.first);
console.log(obj1.courses[0]);
console.log(obj1.courses[1]);
console.log(obj1);
console.log(obj1.courses.length);
obj1.courses.length = 4;
console.log(obj1);
console.clear();
console.log(obj1.courses[3][0]);
const arr1 = ["one", "two", "three"];
console.log(arr1);
obj1.courses[4] = arr1;
console.log(obj1);

let a = 1;
a = 10;
console.log(obj1.courses[4][2]);
obj1.courses[4][2] = "five";
obj1.courses[4][4] = "six";
arr1[0] = "NEW";
console.log(obj1);
console.log(arr1);
const obj2 = {
    "first": "Hello",
    "arr": arr1
}
console.clear();
console.log(obj2);
arr1[9] = arr1;
