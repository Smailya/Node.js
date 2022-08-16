# Unit 1 Code Readme

Code in this folder references examples in Unit 1.

---Lesson 2 ---

To display the content of the message store in the variable, you Navigate
to your project’s directory with terminal, and run, then type node + the name of your file.

---Lesson 3 ---
Creating a Node.js module:
you can create your own module or you can install.

Constructing a Node.js application with npm:
write npm init in your command line from your root file to install npm.

Installing a Node.js package with npm:
Navigate to your project’s directory with terminal,then install city by typing: npm install cities --save;
it will install the cities from the city package.
if you want to see the output type: node main

--- lesson 4 ---

Generating a basic web server using Node.js and npm:
Navigate to your project’s directory with terminal, and run, npm init
which will install the json package and it’s the core application file.
then install http module, http module helps you communicate across the
web by using HTTP. port 3000 is used for web server

Writing code that processes requests from a browser and sends back a response:
when you run the localhost via the browser, if you check back on your CMD you will see
that the server received a requrest

Running a web server in your browser:
Navigate to your project’s directory with terminal, and run
node main in your terminal window
open your browser to the address localhost:
3000. 


--- lesson 5 ---

Collecting and processing request data:
Every time you load a URL you make a guest request
To collect all the posted data with a server. the request listens for a specific data event.
define a new array, body, outside this event handler and sequentially add the data chunks to it
as they arrive at the server.When all the data chunks are received, they can be collected as a single data item.

Submitting a POST request with the curl command:
Using the curl keyword, you can use different flags, such as –data, to send information to a server via a
POST request.in your windows terminal run this code: : curl --data "username=
Jon&password=secret" http://localhost:3000.

Building a web application with basic routes:
A route is a way of determining how an application should respond to a request made to a specific URL


--- lesson 6 ---

Serving entire HTML files by using the fs module:
Through the fs module, your server can access and read your index.html.
call the fs.readFile method within an http server in your project’s main.js file.
With the fs constant, you can specify a particular file in the relative directory.
const fs = require("fs");

Serving static assets:
You should also have a public file where all your assets are located, assets are img,jpg,css etc.

Creating a router module:
create a file called route.js to store all your routes in there.
When you call get or post, you need to pass the URL of the route and the function you
want to execute when that route is reached.
These functions register your routes by adding them to the routes object, where they can
be reached and used by the handle function. You need to require the route with require("./router").

---Lesson 7---
is the combination from 2 to 6.