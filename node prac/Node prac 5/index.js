const express = require('express');
const app = express();
const userModel = require('./usermodel')
 app.get('/', (req, res)=>{
    res.send('chal rha ha.')
 })

 app.get('/create', async(req, res)=>{
  let userCreated = await userModel.create({
      name: "Hafiz Irtaza",
      email: "Hafiz@gamil.com",
      username: "Hafiz925"
   })
   res.send(userCreated)
 })
// javascript me pehla asynchronous code nahi chalaya jata pehla synchrounous code then other code. because main stack me sync code chalaya jata ha then jab stack khali hota ha phir async code chalta ha. and mongoose ke mutabik ye  userModel.create({
   //    name: "Hafiz Irtaza",
   //    email: "Hafiz@gamil.com",
   //    username: "Hafiz925"
   // })
   // code async code ha.. 


   app.get('/update', async (req, res)=>{
     let updateUser = await userModel.findOneAndUpdate({name: "Hafiz Irtaza"}, {name: 'Hafiz Artaza'}, {new: true})
     res.send(updateUser)
   })

   app.get('/read', async (req, res)=>{
      let users = await userModel.find()
      res.send(users)
   })
   // app.get('/read', async (req, res)=>{
   //    let users = await userModel.findOut({name: 'Hafiz Irtaza'})
   //    res.send(users)
   // })

   app.get('/delete', async (req, res)=>{
      let deleteUser = await userModel.findOneAndDelete({name: 'Hafiz Irtaza'})
      res.send(deleteUser)
   })

 app.listen(3000)

 // jab user create krta han aur response sand krta han to ik id hoti ha jo ke hexadecimal numbers pe base krti ha . is ID ke pehla 3 bytes time stamp contain krta han means user ko kis time pe create kiya gya tha. or baki ke number me machine ki information hotii ha etc