# Hello World HTTP Server

## Objectives

1. Implement your first Node server which displays Hello World on a webpage
1. Start the server, test it, close it
1. Utilize async way of coding by using callbacks
1. Observe that each time you make a change you need to restart the process
1. Download and use `node-dev` or `nodemon`

## Introduction

HTTP servers are at the heart of the web development. With Node and its core `http` module , you  can build HTTP server effortlessly. 

In this lab, you'll implement the quintessential Hello World of the HTTP servers with out the usage of any frameworks (i.e., only with core modules). 

## Instructions

1. Create `server.js`
2. In `server.js` implement an HTTP server with `createServer`
3. Use named function `requestHandler` as the request handler for the server
4. Output "Hello\n" (`\n` is for the new line)
5. Start the server with `node server` and test making a get request with CURL
6. Make changes to `server.js` output "Hello World\n" and observe that the server code wasn't updated in the process
7. Download `node-dev` or `nodemon`, the development tools for Node.js which watch for source code changes and restart the applications accordingly.
8. Run `server.js` with `node-dev` or `nodemon`. Observe that now every time you make a change to the source code, the server will restart.
8. Run tests with `npm install && npm test`

In the `test.js`, we are using `before` and `after`. They have some preparatory and clean up code correspondingly. For example, in `before` we start the server using `child_process.exec` (similar to `child_process.spawn`). While in `after`, we terminal that same process by referencing variable `child` and invoking `kill()`. Don't worry too much about what this code does, just that it helps the tests run more effectively.

### Resources

* [node-dev](https://github.com/iliakan/node-dev)
* [nodemon](https://github.com/remy/nodemon)
