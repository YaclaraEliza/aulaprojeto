const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const Produto = require("./database/produto");

connection
    .authenticate()
    .then(()=>{
        console.log("conexao feita com o db");
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    }) 
     
    app.get("/produto", (req, res) => { 
        res.render("produto");
    });
    
    app.post("/salvarProduto", (req, res)=>{
        var titulo = req.body.titulo;
        var descricao = req.body.descricao;
        Produto.create ({ 
            titulo: titulo, 
            descricao: descricao
        }).then(() => { 
            res.redirect("/")
        });
            
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(8080, () => {
    console.log('ta rodando')
});

app.get('/', (req, res) => {
    //res.send('to vivo');
    var nome = 'yaclara';
    var idioma = 'portugues';
    var exibirMsg = true;
    var produtos = [
        { nome: "Pipos Churrassco", valor: 2 },
        { nome: "Repolho", valor: 3 },
        { nome: "Maionese", valor: 5.2 },]

  app.get('/nome/ : nome', (req, res) => {
            var nome = req.params.nome;
            res.send('nome: ' + nome);
        }); 
    
    res.render("index", {
        nome: nome,
        idioma: idioma,
        exibirMsg: exibirMsg,
        produtos: produtos
    });
});

/*// npm i body-parser
localhost: 8080
const express = require("express");
const app  = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Estou dizendo para o Express usar
//o EJS como view engine 
app.set('view engine', 'ejs');


//Estou definindo a pasta de arquivos está
app.use(express.static('public'));

app.listen(8080, ()=>{
    console.log("app rodando")
});

app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/usuario", (req, res)=>{
    res.send("Oi, usuario 😄")
});*/