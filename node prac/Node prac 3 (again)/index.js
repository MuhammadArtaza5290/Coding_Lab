const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}));



// app.use()  => Ye middleware ko register karne ke liye hota hai.
// Middleware ka matlab hai: Ek function jo request aur response ke beech kaam karta hai.

//express.static()  => Ye ek built-in middleware hai jo static files ko serve karta hai.
// Static files ka matlab hai wo files jo directly browser mein dikhayi ja sakti hain, jaise images, CSS, ya JavaScript files.

//path.join(__dirname, 'public')
//  path.join ek helper function hai jo alag-alag paths ko sahi tarike se combine karta hai, taki cross-platform compatibility ho.
// __dirname ka matlab hai current directory ka path.
// 'public' ek folder ka naam hai jisme aapki static files hain.
app.use(express.static(path.join(__dirname, 'public')))  



app.set('view engine', 'ejs')
app.get('/', (req, res)=>{
    res.render('index')
})


app.get('/user/:username', (req, res)=>{
    res.send(`Welcome ${req.params.username}`)
})

app.get('/user/:name/:age', (req, res)=>{
    res.send(`Your name is ${req.params.name} and your age is ${req.params.age}`)
})

app.listen(5000)