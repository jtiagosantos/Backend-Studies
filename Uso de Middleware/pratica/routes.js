const express = require('express');
const route = express.Router();

//controllers
const controllers = require('./controllers/index');

//middlewares
const { myMiddleware, lastMiddleware } = require('./middlewares/index');

route.get('/', myMiddleware, controllers.homePageController, lastMiddleware); //execução em sequência
                //1°                     2°                        3°
module.exports = route;