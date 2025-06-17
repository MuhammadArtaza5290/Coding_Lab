const express = require('express');
const app = express()
// app.use(function(req, res, next){
//     console.log('middleware chla ik bar');
//     next();
// })
// app.use(function(req, res, next){
//     console.log('middleware chla ik aur bar.');
//     next(); 
// })
// app.get('/', function(req, res){
//     res.send('Hello World! i am Hafiz.')
// })

// app.get('/about', (req, res, next)=>{
//     return next(new Error("Not implemented."))
// })
// app.use((err, req, res, next)=>{
//     console.log(err.message);
//     res.status(500).send('Boss! something went wrong here.')
    
// })

// app.get('/', (req, res)=>{
//     res.send('welcome to the Home Page.')
// })
// app.get('/about', (req, res)=>{
//     res.send('This is the About Page.')
// })
// app.get('/contact/:email', (req, res)=>{
//     res.send(`Contact us at ${req.params.email}`)
// })


// app.get('/user/:name', (req, res)=>{
//     res.send(`Hello! ${req.params.name}`)
// })

app.use((req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleTimeString();
    console.log(`${method}  ${url} - ${time}`);
    next()
})

app.get('/', (req,res)=>{
    res.send('slash route chala.')
})
app.get('/about', (req, res)=>{
    res.send('about route chala.')
})
app.get('/profile', (req, res)=>{
    res.send('profile route chala.')
})
app.listen(3000)