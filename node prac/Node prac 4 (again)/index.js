const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')


app.get('/', function(req, res){
    fs.readdir('./files', function(err, files){
        console.log(files);
        
        res.render('index', {files: files})
    })
})


app.get('/file/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, details){
        res.render('show', {filetitle: req.params.filename, filedetail: details})
    })
})
app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.detail, function(err){
        res.redirect('/');
    })
})

// this piece of code is writen for edit title from line(33 to 43). 
app.get('/edit/:filename', function(req, res){
    res.render('edit', {filename: req.params.filename})
})

app.post('/editfile', function(req, res){
    fs.rename(`./files/${req.body.Previoustitle}`, `./files/${req.body.Newtitle}` , function(err){
        console.log('This is req.previous title',req.body.Previoustitle);
        console.log('This is req.New title',req.body.Newtitle);
        
        res.redirect('/')
    })
})

// This piece of code is used to delete notes from screen.
app.get('/delete/:filenames', function(req, res){
    fs.unlink(`./files/${req.params.filenames}`, function(err){
        res.redirect('/');
    })
})

// This piece of code is used to edit the details of notes.
app.get('/editdetail/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, detail){
        console.log('This is req.params.filename', req.params.filename);
        res.render('editDetail', {filedetail: detail, filenames: req.params.filename})
    })
    
})

app.post('/editdetails', function(req, res){
    fs.writeFile(`./files/${req.body.filenames}`, `${req.body.Newdescription}`, function(err){
        console.log('This is req.body.filenames', req.body.filenames);
        res.redirect('/')
    })
})


app.listen(4000);