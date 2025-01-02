const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error(err);
    res.status(500).send('Internal Server Error'); // Send error response to client
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong!'));
    }
  });
}