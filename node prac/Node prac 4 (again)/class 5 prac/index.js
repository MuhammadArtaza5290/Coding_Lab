const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

// ===============routes ==================

//=================== create file and show on home page
app.get('/', (req, res)=>{
    fs.readdir('./files', function(err, files){
        console.log(files);
        
    res.render('home', {files: files})
    })
})
//================== create file ============================
app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details , function(err){
        res.redirect('/')
    })
})

//=================== edit file title and show on home page ====================
app.post('/editFile', function(req, res){
    console.log(req.body);
    fs.rename(`./files/${req.body.Previous}`, `./files/${req.body.new}`, function(err){
        res.redirect('/')
    })
    
})

//================= edit file title =========================
app.get('/edit/:filename', function(req, res){
    console.log(req.params.filename);
    
    res.render('edit', {fileName: req.params.filename})
})
//=================== read more file route =====================
app.get('/showFile/:filename', function(req, res){
   fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, filedata){
    res.render('show', {fileTitle: req.params.filename, fileData: filedata})
   })
})

//========= delete file ===============
app.get('/delete/:filename', function(req, res){
    fs.unlink(`./files/${req.params.filename}`, function(err){
        res.redirect('/')
    })
})

//=============== edit details ======================= 

app.get('/editdetail/:filename', function(req, res){
   fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, filedata){
    res.render('editdetail', {fileData: filedata, fileTitle: req.params.filename})
   }) 
})


app.post('/editDetail', function(req, res){
    console.log(req.body);
    fs.writeFile(`./files/${req.body.Previous}`, `${req.body.new_detail}`, function(err){
        res.redirect('/')
    })
})

app.listen(4000);