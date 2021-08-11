const HomeModel = require('../models/HomeModel');

exports.homePage = (req, res) => {
    res.send(`
        <form method="POST" action="/api/upload-form">
            <input type="text" name="firstName" placeholder="Insira seu primeiro nome" /> <br /><br /> 
            <input type="text" name="lastName" placeholder="Insira seu sobrenome" /> <br /><br />
            <input type="text" name="email" placeholder="Insira seu e-mail" /> <br /><br />
            <input type="password" name="password" placeholder="Insira sua senha" /> <br /><br />
            <button type="submit">Enviar</button>
        </form>
    `);
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