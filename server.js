const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Parses incoming POST data into key/values pairs via `req.body`
// `extended` checks for nested / sub-array data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  // make static resources
app.use(express.json());  // parse incoming JSON
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const { animals } = require('./data/animals');


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
