const express = require('express');
const routes = require('./routes');

const { midllewareForAllRoutes } = require('./middlewares/index');

const app = express();
const PORT = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(midllewareForAllRoutes); //será executado antes de qualquer outra rota
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));