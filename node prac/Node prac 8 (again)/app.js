const express = require('express')
const app = express()
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const userModel = require('./models/user')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/create', (req, res)=>{
    let{username, email, password, age} = req.body;
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, async function(err, hash){
            let createUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })
            let token = jwt.sign(email, "asdfasdfasdf")
            res.cookie('token',token)
            res.send(createUser)
        })
    })
    
})

app.get('/logout', (req, res)=>{
    res.cookie('token', "")
    res.redirect('/')
})

app.get('/loginPage', (req, res)=>{
    res.render('login')
})

app.post('/login', async (req, res)=>{
    let user = await userModel.findOne({email: req.body.email})
    if(!user) res.send('Something is wrong')

    bcrypt.compare(req.body.password, user.password, function(err, result){
        if(result){
            let token = jwt.sign({email: user.email}, "asdfasdfasdf")
            res.cookie('token', token)
            res.send('You are succefully login')
        }else{
            res.send('Something is wrong.')
        }
    })
    
})

app.listen(4000)