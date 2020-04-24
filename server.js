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
