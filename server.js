const express = require('express');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// -----------------------------------------------------
//middlewares

// -----------------------------------------------------
// Connect to MongoDB
mongoose.connect(process.env.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// ----------------------------------------------------- 

app.use(urlencoded());
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/', require('./Routes/router'));

// -----------------------------------------------------
// Starting the Express server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
