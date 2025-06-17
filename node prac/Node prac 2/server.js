// What is framework? (framework ap ko ik flow deta ha, ke ap ko isi flow me kam krna ha)
// Framework ik ase website ha jo developers ko ik work flow dati ha ke jo bhi flow ha us ko as it is hi apni website me paste kro.
// like Bootstrap me se hum koi navbar ka code le sakte han. us ka connecting process. us me hum kuch chanhges kr skta han flow ko dakhta hua.
// What is express js?
// Express js is a npm package. it is a framework.
// Express js manages everything from receving the request and giving the response.

// const express = require('express')
// const app = express()
// app.get('/', function(req, res){
//     res.send('Hello Hafiz!')
// })
// app.listen(3000)
const fs = require('fs');
const port = 3000;
const express = require("express");
// Note: ^ above express ik function ha jab hum is function ko call krta han to ya function hume express ki tmam functionalty deta ha jo express kr skta ha.
const app = express();
// if we use any framework and sand data as a json formet.
app.use(express.json());
// app.use(express.json())
// jab hum EGS use kr rha ho ge . means actual forms ka data hi bheja jay.
app.use(express.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}))
// ^ is line ko run krna se express ka sara data app variable me store ho jati han.
// now we make some routes using app variable.
// What is routes?
// suppose => facebook.com/ ===> .com ke sath (" / ") ye jo bar ha ya by default ha. is ka mtlb ha jab hum facebook.com likhta han to hum ( Home page pr yani (" / ") slash route pr hote han).
// if we write => facebook.com/about ===> is ka mtlb ha hum /about route pr han .
//route means website page .

// app.get(Router, request handler)
// request handler is a middle ware
app.use(function(req, res, next){
    console.log("middleware chala");
    next();
});
app.use(function(req, res, next){
    console.log("middleware chala ik aur bar");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello My Champion.How are you bro.");
});


// and here we use error handling.
// app.get("/about", (req, res, next) => {
//     fs.readFile('./file.js', (err, data)=>{
//         if(err){
//             next(err)
//         }else{
//             res.send("About Page. This is my about page.");
//         }
//     })
//     // return next(new Error('someting went wrong'))
//     // res.send("About Page. This is my about page.");
// });

app.get('/about', (req, res, next)=>{
    fs.readFile('./file.js', (err, data)=>{
        if (err) {
            next(err);
        } else {
            res.send('Yes i got it. i have complete error handler in about page.')
        }
    })
})

// this is error handling
app.use((error, req, res, next)=>{
    res.status(500).send("Something broke!");
    console.error(error);
})

app.listen(port);
// when we sand request to take image from google. my request is going to google server. MiddleWare come  between my laptop and server .
// What is Middleware?
// jab bi humara server request accept krta ha waha se router ke beech puhchane tak agr ap us request ko beech me rokte ho and kuch perform krta ho , to ye element middleware kihlata ha.
// in short middleware comes between server to route.






// these lines are about cookies parser.
// tumne to bheja tha plain text lakin server ko mila blob (blob means front end se jo data bheja jay wo us ke sath or jo b chezan front end se attach ho kar jati han like a ball.) which is not directly readable by server.
// ab is cheez ko handle karna padega ki hum us blob ko wapis se readable kar saken.

