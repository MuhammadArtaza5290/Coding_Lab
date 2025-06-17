// const express = require('express')
// const app = express()
// const cookieParser = require('cookie-parser')


// app.use(cookieParser())
// app.get('/', (req, res)=>{
//     res.cookie("name", "Hafiz Artaza")
//     res.send('done')
// })

// app.get('/read', (req, res)=>{
//     console.log(req.cookies);
     
//     res.send('read this page.')
// })

// app.listen(4000)



const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser())
// This Piece of code is for encryption
// app.get('/read', (req, res)=>{
//         bcrypt.genSalt(10, function(err, salt){
//                 bcrypt.hash('Hafiz925', salt, function(err, hash){
//                         console.log(hash);
                        
//                 })
//         })
// })



// This piece of code is for decryption
// app.get('/', (req, res)=>{
//         bcrypt.compare("hartaza9250", "$2b$10$by1WxrnJ2rsjwsKDe06mb.J8C0tUW7qwDvYUCh2X8c55a0dCiFmsK", function(err, result) {
//         console.log(result);
    
//         })
// })

app.get('/', (req, res)=>{
        let token =jwt.sign({email: 'hafiz@gmail.com'}, "secret")
        res.cookie('token', token)
        res.send('done')
        // console.log(token);
        
})
app.get('/read', (req, res)=>{
        // console.log(req.cookies.token);
        let data = jwt.verify(req.cookies.token, "secret")
        console.log(data);
        
})


app.listen(4000)