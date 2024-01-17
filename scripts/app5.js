//7. Explore JSON and how you can get JSON data as a JavaScript Object

// const myStr = '{"first":"Laurence","last":"Svekis"}';
// const myObj = JSON.parse(myStr);
// console.log(myStr);
// console.log(myObj);

// The JSON.stringify() method converts a JavaScript object or value to a JSON
// string like {"first":"Laurence","last":"Svekis"}
// The JSON.parse() method parses a JSON string which needs to be properly
// structured as a JSON object and constructs the JavaScript
// value contained in the string.


//First stringify the object and then parse it.
const arr1 = [{
    "first": "Laurence"
},
{
    "first": "Mike"
},
{
    "first": "Jane"
},
{
    "first": "Lisa"
},
{
    "first": "Henry"
}
];
console.log(arr1[0].first);
const str1 = JSON.stringify(arr1);
console.log(str1);
console.log(str1[0]);
const jsObj1 = JSON.parse(str1);
console.log(jsObj1[0].first);
arr1[5] = {
    "first": "Joe"
};
console.log(arr1);
console.log(jsObj1);
const str2 = '[' + str1 + ']';
console.log(str2);
const jsObj2 = JSON.parse(str2);
console.log(jsObj2[0][0].first);
const obj2 = {
    first: 'Laurence',
    last: 'Svekis'
}
console.log(obj2);
const str3 = JSON.stringify(obj2);
console.log(str3);
const jsObj3 = JSON.parse(str3);
console.log(jsObj3);