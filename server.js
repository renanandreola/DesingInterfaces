const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const restify = require('restify');
const mongoose = require('mongoose');

var port = process.env.PORT || 3000;

let env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('engine', env);

require('useful-nunjucks-filters')(env);

//STARTING SERVER
app.listen(port, () => {
  console.log('LISTEN ON PORT -> localhost:' + port);
});

//NUNJUCKS
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
extended: true
}));

app.use(express.static('public'));

//pages 
  
app.get('/', (req, res) => {
    res.render('index.html')
});

app.get('/register', (req, res) => {
  res.render('register.html')
});

app.get('/motorcycle', (req, res) => {
  res.render('motorcycle.html')
});

app.get('/acessories', (req, res) => {
  res.render('acessories.html')
});

app.get('/carrinho', (req, res) => {
  res.render('carrinho.html')
});

app.get('/product', (req, res) => {
  res.render('product.html')
});

app.get('/contact', (req, res) => {
  res.render('contact.html')
});

app.get('/loginadm', (req, res) => {
  res.render('loginadm.html')
});

app.get('/adm', (req, res) => {
  res.render('adm.html')
});


