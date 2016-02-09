# Hello World HTTP Server

## Objectives

1. Implement your first Node server which displays Hello World on a webpage
1. Start the server, test it, close it
1. Utilize async way of coding by using callbacks
1. Observe that each time you make a change you need to restart the process
1. Download and use node-dev or nodemon

## Introduction

HTTP servers are at the heart of the web development. With Node and its core `http` module , you  can build HTTP server effortlessly. 

In this lab, you'll implement the quintessential Hello World of the HTTP servers with out the usage of any frameworks (i.e., only with core modules). 

## Instructions

1. Create `server.js`
2. In `server.js` implement http server with `createServer`
3. Use named function `requestHandler` as the request handler for the server
4. Output "Hello\n" (`\n` is for the new line)
5. Start the server with `$ node server` and test with CURL
6. Make changes to output "Hello World\n" and observe that the server code wasn't updated in the process
7. Download node-dev or nodemon. 
8. Run tests with `npm install && npm test`




### Extra Info
