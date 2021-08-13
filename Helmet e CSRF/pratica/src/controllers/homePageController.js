const HomeModel = require('../models/HomeModel');

exports.homePage = (req, res) => {
    //req.session.user = { name: 'Tiago', logged: true };

    console.log(req.session.user);

    //req.flash('info', 'Olá mundo!');
    //req.flash('error', 'Mensagem de erro aqui!');
    //req.flash('success', 'Mensagem de sucesso!');

    //console.log(req.flash('info'), req.flash('error'), req.flash('success'));

    res.render('form');
};

exports.uploadForm = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    HomeModel.create({
        firstName,
        lastName,
        email,
        password
    });
    
    res.send('Create collection!')
};