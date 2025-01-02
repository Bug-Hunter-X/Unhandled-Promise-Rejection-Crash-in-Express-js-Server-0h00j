# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  When asynchronous operations within route handlers fail without proper error handling, the server can crash unexpectedly.

## Bug Description

The `bug.js` file contains an Express.js server with an asynchronous operation (`someAsyncOperation`) inside a GET route handler.  If `someAsyncOperation` rejects (simulated by a random chance), the error is logged to the console, but the server crashes without sending an error response to the client.

## Solution

The `bugSolution.js` file provides a corrected version. It includes a `catch` block within the route handler to handle potential errors gracefully.  This prevents server crashes and allows for sending appropriate error responses to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.  The server might crash or work depending on the random number generator.
4. Run `node bugSolution.js`. The server should run without crashing, handling errors gracefully. 
