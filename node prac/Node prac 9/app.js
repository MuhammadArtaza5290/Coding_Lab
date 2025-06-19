const express = require('express')
const app = express()
const userModel = require('./models/user')
const postModel = require('./models/post')


app.get('/', (req, res)=>{
    res.send('welcome')
})

app.get('/create', async (req, res)=>{
    let createUser = await userModel.create({
        username: "Hafiz Artaza",
        email: 'artaza@gmail.com',
        age: 23

    })
    res.send(createUser)
})

app.get('/post/create', async (req, res)=>{
   let post = await postModel.create({
        postdata: 'hello sary log kesa ho',
        user: '6851c82681abd585957fbcb4'
    })

    let user = await userModel.findOne({_id: "6851c82681abd585957fbcb4"})
    user.posts.push(post._id)
    await user.save()
    res.send({post, user})
})

app.listen(3000)