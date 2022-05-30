const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolvedor web"
    
        },
        {
            title: "E",
            message: "JS usa js para renderizar HTML"
    
        }, {
            title: "M",
            message: "uito fácil de usar"
    
        }, {
            title: "A",
            message: "morzinho"
    
        }, {
            title: "I",
            message: "nstall ejs"
    
        },
        {
            title: "S",
            message: "intaxe simples"
    
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    }); //espera que esse index esteja dentro de uma pasta chamada "views"
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("rodou")