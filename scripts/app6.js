//8. Use JSON data to connect to JSON files and get contents with JavaScript code

// Connect to a file using the JavaScript fetch API.  The fetch() API is asynchronous
// and provides an interface for fetching files across the network.  The files can be
// local or file from other servers, you will need the path for the file either relative or
// absolute depending on the location of your JavaScript file.  Fetch API provides a
// more powerful and flexible set of features of XMLHttpRequests.  For making a
// request and fetching a resource, use the fetch() method.

// In the fetch() method there is only one mandatory argument which is the path to
// the resource.  It is promise based which means that it waits for the response back
// from the server.  This is important since unlike when you have an object in your
// code which is ready to be used, the data coming from the end point might not come
// in right away, this would cause a lag in the code if we had to wait.   Fetch solves
// this by having the promise built in when the response resolves.
// Once fetch retrieves a response there are a number of methods available to define
// the response content.  Response properties include the body, which is the body of
// the contents, the headers, status, type, url and others.   The response object also
// has methods like, text() which resolves a text representation of the response body,
// and json() which resolves the content parsing the response body as JSON.
// For the fetch API you can also include options to set the method which by default is
// GET and setting headings as well as additional options

getData();
function getData() {
    const url = '../json/json1.json';
    fetch(url)
        .then((rep) => rep.json())
        .then((data) => {
            console.log(data);
            output(data);
        })
}
function getData2() {
    const url = '../json/json1.json';
    fetch(url)
        .then((rep) => rep.text())
        .then((data) => {
            console.log(data);
            const jsObj = JSON.parse(data);
            console.log(jsObj);
            output(jsObj);
        })
}
function output(json) {
    json.friends.forEach((person, index) => {
        const temp = `${person.first} ${person.last} ${person.id}
`;
        console.log(temp);
        //const str1 = `"${4+5+index}     "'Test'`;
        //console.log(str1);
    })
}