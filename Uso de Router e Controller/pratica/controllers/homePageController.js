exports.homePage = (req, res) => {
    res.send(`
        <form method="POST" action="/api/upload-form">
            <input type="text" name="first-name" placeholder="Insira seu primeiro nome" /> <br /><br /> 
            <input type="text" name="last-name" placeholder="Insira seu sobrenome" /> <br /><br />
            <input type="text" name="e-mail" placeholder="Insira seu e-mail" /> <br /><br />
            <input type="password" name="password" placeholder="Insira sua senha" /> <br /><br />
            <button type="submit">Enviar</button>
        </form>
    `);
};

exports.uploadForm = (req, res) => {
    const body = req.body;
    res.send(body);
};