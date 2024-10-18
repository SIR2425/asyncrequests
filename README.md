# asyncrequests

## Example

This example application demonstrates the use of asynchronous requests in a web environment. The server, built with Express.js, provides endpoints that simulate delayed responses.

The client, implemented with HTML and JavaScript, makes asynchronous fetch requests to these endpoints and displays the responses on the web page. 

The application showcases how to handle asynchronous operations using fetch and async/await, and how to manage and simulate time-consuming responses. 

This example is useful for understanding the principles of asynchronous programming, handling delays, and updating the user interface dynamically based on server responses.


## how to install and run

### the server

Clone the repository

At the terminal (at the directory)

`npm install`

`npm start`

Every time you change the source code, restart the server - `^C` to kill it and then again `npm start`.

### test with the cllient

In a browser navigate to `http://localhost:3000`

## The Server
The server is built using Node.js+Express.js. It provides an endpoints that simulate delayed responses to demonstrate asynchronous operations. 
It also implements a static server to serve the client files (HTML and JS)

### Defining the Delay Endpoint:

```javascript
app.get("/delay/:seconds", (req, res) => {
    const nseconds = parseInt(req.params.seconds);
    const milliseconds = nseconds ? nseconds * 1000 : 0;

    const d = new Date();
    const mins = d.getMinutes();
    const secs = d.getSeconds();

    console.log('Request ' + milliseconds + ' received @ ' + mins + ':' + secs);

    setTimeout(() => { 
        const d = new Date();
        const mins = d.getMinutes();
        const secs = d.getSeconds();
        console.log('Request ' + milliseconds + ' sent @ ' + mins + ':' + secs);
        res.send('Delayed response for ' + milliseconds + ' milliseconds');
    }, milliseconds);
});
```

`app.get("/delay/:seconds", (req, res) => { ... })`: 
  Defines a route that listens for GET requests at the path /delay/:seconds. The :seconds part is a route parameter that specifies the delay duration.

`setTimeout(() => { ... }, milliseconds);`:
  Sets a timeout to simulate the delay. After the specified delay, it logs the response time and sends a delayed response back to the client.

## The Client

The client is a web application that demonstrates how to make asynchronous requests to the server and handle delayed responses. It consists of HTML and JavaScript files.

### HTML File (`index.html`)
Contains a <div> element with the ID output where the responses will be displayed.
Includes the JavaScript file for handling fetch requests and displaying data.

### JavaScript File (`req.js`)
Functions:
`fetch(url)`: Fetches data from the given URL and displays it.
`display(data)`: Appends the fetched data to the output div.
`syncdisplay(data)`: Appends synchronous display messages to the output div.

### JavaScript File (`req2.js`)
req2.js is an enhanced version of the initial JavaScript file, focusing on handling multiple asynchronous requests and displaying their responses in a more organized manner.

### JavaScript File (`req3.js`)
req3.js further improves upon req2.js by introducing additional features such as handling different types of responses and more robust error handling.

Uses `async/await` for better readability and error handling.

### how to configure the version of the client

Open your HTML file (e.g., `index.html`).

Locate the <script> tags that includes the JavaScript files and uncomment the one that fits.

