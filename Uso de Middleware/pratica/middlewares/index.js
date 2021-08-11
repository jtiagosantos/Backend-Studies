function myMiddleware(req, res, next) {
    console.log("\nMy middleware runner!\n");
    next(); //para passar para o próximo middleware
};

function lastMiddleware(req, res, next) {
    console.log("\nPassed through the last middleware!\n");
    res.send('Last Middleware! ----' + req.user.name); //pegando a informação vinda do middlewareForAllRoutes
};

function midllewareForAllRoutes(req, res, next) {
    const user = "userTest";
    req.user = { name: "Tiago" }; //passando informação entre middleware
    
    if(user) {
        console.log("\nMiddleware for all routes!\n");
        next();
    }else {
        res.send("No user!");
    }
};

module.exports = { 
    myMiddleware,
    lastMiddleware,
    midllewareForAllRoutes
};