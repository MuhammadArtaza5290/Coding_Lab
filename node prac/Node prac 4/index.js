const express= require('express');
const app = express();
const path = require('path')
const fs = require('fs')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    // About line 12: Ye Node.js ka built-in fs (File System) module use karta hai jo ./files folder ke andar ki sari files ko read karta hai.
    // fs.readdir('./files') folder ke andar ki files ka array return karta hai
    fs.readdir('./files', function(err, files){
        console.log(files);
        //Render karne ka matlab hai HTML ya EJS ko browser mein dikhana.
        res.render('index', {files: files});
        // {files: files} is object me jo files param ha us me ik array store ho rha ha.
        
    })
})

app.get('/file/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, 'utf-8' ,function(err, filedata){
        res.render('show', {filename: req.params.filename , filedata: filedata})
    })
})

app.get('/edit/:filename', function(req, res){
    console.log(req.params.filename);
    
   res.render('edit', { filename: req.params.filename})
})


app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/')
    })
})

app.post('/edit', function(req, res){
    console.log(req.body);
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect('/')
    })
})

app.listen (4000);