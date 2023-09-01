const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

app.use(cors()); // Use the cors middleware

app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree', "SALAM"] });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
