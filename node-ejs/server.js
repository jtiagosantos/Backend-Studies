const express = require('express');
const app = express();

app.set("view engine", "ejs"); //indica qual será o motor gerador da view

app.get("/", (req, res) => {
    const items = [
        {
            title: "D",
            message: "esenvolver FullStack"
        },
        {
            title: "E",
            message: "xpress"
        },
        {
            title: "M",
            message: "ongodb"
        },
        {
            title: "A",
            message: "ngularJS"
        },
        {
            title: "I",
            message: "nternet"
        },
        {
            title: "S",
            message: "oap"
        }
    ];

    res.render("pages/index", { items });
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.listen(3000, () => console.log("server running!"));