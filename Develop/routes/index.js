const express = require('express');

// Import our files containing our routes
const html = require('./html');
const api = require('./api');

// Create and instance of express so we can apply the middleware and routing
const app = express();

app.use('/', html);
app.use('/api', api);

module.exports = app;
