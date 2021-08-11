const express = require('express');
const route = express.Router(); //para criar as rotas

const homePageController = require('./src/controllers/homePageController');
const aboutPageController = require('./src/controllers/aboutPageController');
const findController = require('./src/controllers/findController');

route.get('/', homePageController.homePage);
route.post('/api/upload-form', homePageController.uploadForm);
route.get('/about', aboutPageController.aboutPage);
route.get('/api/get-data', findController.find);

module.exports = route;