const express = require('express');
const app = express();
const path = require('path')

// line no 5,6 are parsers
//Jab frontend se (React, form, ya postman) data aata hai JSON format mein (jaise: {name: "Ali", age: 20}), to Express by default use samajh nahi sakta.
// express.json() middleware ka kaam hota hai JSON data ko read karna aur samajhna.
// Iske baad tum req.body mein us data ko access kar sakte ho.
// in short jab json format me frontend se data ata ha to ye line us data ko smajta(parse) ha aur us ko request (req) ki body me dal deta ha.
app.use(express.json());
// jab kisi bhi frontend se forms ke through data ata ha wo url encoded form me hota ha us ko express js read nahi kar pata .
// express.urlencoded => ik function ha jo form ke data ko smajta ha aur us data ko req.body me hum access kr sakte han.
app.use(express.urlencoded({extended: true}));
// line no 9 . means static files search kro is path pr. har request ke liya static files given folder me dhondna.
// koi b request backend pr ay har request ke liya static file hme public me milan gi
app.use(express.static(path.join(__dirname, '/public')));
// kya ap ka backend ejs show kra ga? this is the meaning of this line.
app.set('view engine', 'ejs');


app.get('/', function(req, res){
        res.render("index")
    });

    // colon tell us this is dynamic route. this route is like a variable any value store in it.
    // req.params => means colon (:) => esa kuch b jis ka agge colon (:) ha.

    // hum ne frontend se request bheji wo request a kr /profile/:username me store ho gai and frontend se jo request ai thi wo as a response forntend pr show ho jay gi 
  app.get('/about/:useremail', (req, res)=>{
    res.send(`This is your email : ${req.params.useremail}`)
  })

  app.get('/author/:username/:age/:address', (req, res)=>{
    res.send(req.params)
    // res.send(`Your name is ${req.params.username} and your age is ${req.params.age}. Your address is ${req.params.address}`)
  })

  app.get('/profile/:username', function(req, res){
    res.send(req.params.username)
  })
    app.listen(4000, function(){
            console.log('Server started on port 3000');
        })