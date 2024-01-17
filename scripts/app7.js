// 9. JavaScript asynchronous requests using async and await promises

// The fetch() method is a process of requesting a resource from the network, and
// returning back the promise.  Another way to create promises is using async and
// await.  Promises will run after the initial code is stated, which allows time for
// resolving the response to the request.  Using promises is ideal for situations where
// data is not available right away, and you want to asynchronously make the request
// and then handle it once the data is returned.  In fetch the promise resolves to the
// response object, which can then be used to return the content.

// The keywords Async and await can be used for asynchronous functions.  Placing the
// async keyword in front of a function can turn it into an async function.  The function
// will now return a promise back.  Adding the await keyword can be used to pause
// the code until the promise fulfills.  If we use it with fetch, once the fetch request
// fulfills we can continue with the code.

// Using catch() method in the promise allows you to handle any errors that might
// occur.  You can also use the try, catch to throw custom errors but this is typically
// not needed when using catch

// Within fetch if you use the chaining of the promises, once the promise resolves we
// move to the next step, which can then run a function to output the results of the
// response object.  This provides an easy to read simple syntax that can be used to
// wait for responses, catch errors and handle response data, especially JSON data
// since fetch has the method to convert the JSON structured response object into a
// usable JavaScript object.


// fetch(url)
// .then(rep => rep.json())
// .then(data => viewData(data))
// .catch(error => console.log(error));

const url = '../json/json1.json';
output2();
output();
console.log(output1());
console.log('four');
function output1() {
    return 'three';
}
function output2() {
    console.log('one');
    fetch(url)
        .then(rep => rep.json())
        .then(data => {
            viewData(data);
        })
        .catch(error => console.log(error));
}
async function output() {
    console.log('two');
    const req = new Request(url);
    const rep = await fetch(req);
    const json = await rep.json();
    console.log('five');
    viewData(json);
    //return await Promise.resolve('Hello');
}
function viewData(val) {
    console.log(val);
}
async function outputTest() {
    try {
        let rep = await Promise.resolve('Hello');
        if (!rep.ok) {
            throw new Error('Error oh no');
        }
    } catch (error) {
        console.log(error);
    }
}




