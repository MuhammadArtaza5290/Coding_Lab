const fs = require('fs');
// fs.appendFile('hey.txt', 'more data is inserted', function(err){
//     if (err) {
//         console.log(err);
        
//     }else{
//         console.log("done");
        
//     }
// })
// fs.copyFile('hey.txt', 'heyyy.txt', function(err){
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log('done');
        
//     }
// })

// fs.mkdir('./mkFile', function(err){
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log('done');
        
//     }
// })
fs.copyFile('heyyy.txt', './mkFile/hello.txt', function(err){
    if (err) {
        console.log(err);
        
    } else {
        console.log('done ');
        
    }
})