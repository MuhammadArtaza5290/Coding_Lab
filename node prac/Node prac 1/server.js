// 1) write file
// This node function is used to create new file in our directory and insert something in our file. it is also used to overright file details.

// const fs = require('fs');
// fs.writeFile('hello.txt', "Hello young man how are you.", function(error){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("done");
//     }
// })

// 2) append file
// This function is used to insert text in our existing file.
// fs.appendFile('hello.txt','I am fine ,how are you.',(error)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("appended");
//     }
// })
// 3) rename file 
// This function is used to change exsisting file name.
//  const fs = require('fs');
// fs.rename('hello.txt', 'NewFile.txt',(error)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("renamed");
//     }
// }) 

// 4) copy file function
 // This function is used to copy our exsisting file in another folder with same name or different name.
//  const fs = require('fs')
//   fs.copyFile('NewFile.txt','./copy/duplicate.txt',(error=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("copied");
//     }
//   }))

// 5) unlink file
// This function is used to delete file in our directory
// const fs = require('fs')
//  fs.unlink('./copy/duplicate.txt', (error)=>{
//      if (error) {
//          console.log(error);
//      } else {
//          console.log("deleted");
//      }
//  })

// 6) rmdir function 
// rmdir stands for remove directory. this function method is remove only empty folder.

// fs.rmdir('./copy', (error)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("deleted folder");
//     }
// })
// 7)   rmdir
//  this method is used when my folder contain a file.
// fs.rm('./copy', {recursive: true}, (error)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("deleted folder with files");
//     }
// })

// 8) make folder function
 // This function is used to create new folder in our directory.
//  const fs = require('fs');
//  fs.mkdir('./NewDirectory', (error)=>{
//      if (error) {
//          console.log(error);
//      } else {
//          console.log("folder created");
//      }
//  })

// <==== http =====>
    // hum koi b cheez internet pr send krte han ya koi cheez internet se magwate han .
    // ya rules hmare operating system me preinstall hote han .
    // http ik wja ha jis ki mdad se hum kuch internet pr send krte han ya recieve krte han.
    // http request and response hote hain.
    // http request me hum kuch data send krte hain.
    // http response me hum kuch data dikhana hain.
    // node.js k liye http module hote hain.
    // http request and response me object hote hain.
    // http request object me hum request method (get, post, put, delete), url, headers, and body hote hain.
    // http response object me hum status code, headers, and body hote hain.
    // http request and response me event emitter hote hain.
    // http request and response me event emitter me hum 'data' event hote hain.
    // http request and response me event emitter me hum 'end' event hote hain.
    // http request and response me event emitter me hum 'error' event hote hain.

    // how to create server using http.
    const http = require('http')
   const server = http.createServer(function(req, res){
        res.end('hello Hafiz!');
    })

    server.listen(3000);