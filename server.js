const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const util = require("util");

// Import the feedback router
const routes = require('./Develop/routes');

const PORT = 3001;



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('./Develop/public'));

app.use('/', routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
