const express = require('express');
const app = express();
const path = require('path')
//================== Parsers setup =======================>
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//=========================================================

//=================== setup static files ========================
// har request ke liya static file yaha se dhundna (path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
//    __dirname tak mera current folder a gya. and agy public means mera public folder tak
// path.join=> join krta ha current folder ko public folder sath milata ha.
//===============================================================

//================== Ejs setup ============================
// This line tell our bacekend show (render) ejs page
app.set('view engine', 'ejs');
// ========================================================



app.get('/', function(req, res){
    res.render('index')
});

app.get('/profile/:username',function(req, res){
    res.send(`Hello, ${req.params.username}`)
})
app.get('/about/:username/:age', function(req, res){
    res.send(`My name is ${req.params.username}, and my age is ${req.params.age}`)
})

app.listen(3000)
