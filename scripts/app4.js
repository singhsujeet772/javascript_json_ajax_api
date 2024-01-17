//6. Get items in arrays and objects output the data using JavaScript for loops

const obj1 = {
    "first": "Laurence",
    "last": "Svekis",
    "id": 100
}
console.log(Object.entries(obj1));
for (const [key, value] of Object.entries(obj1)) {
    console.log(key);
    console.log(obj1[key]);
    //obj1[key] = 'Smith';
}
const arr1 = (Object.keys(obj1));
const arr2 = (Object.values(obj1));
const arr3 = ["Laurence", "Svekis", 100, true, "hello world"];
console.clear();
console.log(arr1);
console.log(arr2);
console.log(arr3);
for (let i = 0; i < arr3.length; i++) {
    console.log(i, arr3[i]);
}
for (i in arr3) {
    console.log(i, arr3[i]);
}
arr3.forEach((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
})
Object.values(obj1).forEach((val) => {
    console.log(val);
});
Object.entries(obj1).forEach((val) => {
    console.log(val[0], val[1]);
});
//console.clear();
obj1.arr = arr3;
console.log(obj1);
obj1.arr.forEach(el => {
    console.log(el)
});
const friends = [{
    "first": "Laurence",
    "last": "Svekis"
},
{
    "first": "Larry",
    "last": "Smith"
},
{
    "first": "Mike",
    "last": "Doe"
}
];
//console.clear();
console.log(friends);
friends.forEach(friend => {
    console.log(friend.last);
})
friends.forEach(friend => {
    console.log(friend.first);
})