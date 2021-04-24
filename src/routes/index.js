const mainRoute = require('express').Router();
const personRoute = require('./person');

mainRoute.use('/person', personRoute);

module.exports = mainRoute;