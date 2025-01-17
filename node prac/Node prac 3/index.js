const express = require('express');
const app = express();
const path =require('path')

// line no 5,6 are parsers
app.use(express.json());
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

  app.get('/author/:username/:age', (req, res)=>{
    res.send(`Your name is ${req.params.username} and your age is ${req.params.age}.`)
  })
    app.listen(4000, function(){
            console.log('Server started on port 3000');
        })