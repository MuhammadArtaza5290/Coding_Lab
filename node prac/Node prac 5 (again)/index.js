const express = require('express')
const app = express();
const userModel = require('./usermodel')

app.get('/', (req, res)=>{
    res.send('chal rha ha. proof')
})

app.get('/create', async (req, res)=>{
    let createUser = await userModel.create({
        name: 'Arslan',
        email: 'arslan@gmail.com',
        phone: 3003290431
    })
    res.send(createUser)
})

app.get('/read', async (req, res)=>{
    let readUser = await userModel.find()
    res.send(readUser)
})

app.get('/update', async (req, res)=>{
    let updateUser = await userModel.findOneAndUpdate({name: 'Arslan'}, {name: 'Arslan Ali'}, {new: true})
    res.send(updateUser)
})

app.get('/delete', async (req, res)=>{
    let deleteUser = await userModel.findOneAndDelete({name: 'Arslan'})
    res.send(deleteUser)
})

app.listen(3000)