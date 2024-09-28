const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection string using environment variables
const dbURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:27017/mydb`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello, secure Docker Compose!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
