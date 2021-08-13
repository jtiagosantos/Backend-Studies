exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        res.render('404');
    }
};

exports.generateCsrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};