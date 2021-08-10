const express = require('express');
const route = express.Router(); //para criar as rotas

const homePageController = require('./controllers/homePageController');
const aboutPageController = require('./controllers/aboutPageController');

route.get('/', homePageController.homePage);
route.post('/api/upload-form', homePageController.uploadForm);
route.get('/about', aboutPageController.aboutPage);

module.exports = route;