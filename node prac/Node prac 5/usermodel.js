const mongoose = require('mongoose');
// mongoose.connect(`mongodb://127.0.0.1:27017/mongoprac`)




mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)
// schema ik blueprint ya structure hota ha jo define krta ha user ka data collection me kis trha store hota ha.
// like employee field contains (name, email, phone no, address etc)these are fields
// like data types means ik field ki kon c data type ho gi (int, string etc)
// koi esi field jo compelsory ho ya optional ye b define krna hota ha.
// koi esi field jis ka unique hona lazmi ha (userId, email, phone no etc)
const userSchema =  mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model('user', userSchema)
//is ke 1st parameter me model ka name jo  hum singular form me deta han lakin mongoose usy plural form me dekhta ha.
// and 2nd parameter me schema use krta han mean hmara model me kis trha user ka data collection me store hota ha.
//is line me hum model bna rhan han jis me hum btate han . model ka name kya ho ga and kon sa schema yani structure use krna ha. or hum is model ki mdad sy create, detele update , read perform krta han.