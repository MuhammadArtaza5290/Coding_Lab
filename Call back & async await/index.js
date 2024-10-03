// What is promise ?
// There are three stages of promise.
// 1) Pending
// 2) Fulfilled
// 3) Rejected

        //  Promise
 // resolve         reject
//     |               |
//   then()          catch()

// let complete = true;
// function prom(complete) {
//     return new Promise(function (resolve,reject) {
//         console.log("fetching data");
//         setTimeout(()=>{
//             if (complete) {
//                 resolve('Promise completed successfully');
//             }else{
//                 reject('Promise failed');
//             }
//         }, 2000)
//     });

// }

// let onfulfilment = (result) => {
//   console.log(result);
// }

// let onRejection = (error) => {
//   console.log(error);
// }

// prom(true).then(onfulfilment).catch(onRejection);
// prom(true).then(onfulfilment)
// prom(false).catch(onRejection)


let task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 done")
    }, 1000);
});
let task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2 done")
    }, 2000);
})
let task3 =new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 3 done")
    }, 3000);
})
let task4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 4 done")
    }, 4000);
})

task1.then(result =>{
    console.log(result)
}).catch(error => console.log(error)
)
task2.then(result =>{
    console.log(result)
}).catch(error => console.log(error)
)
task3.then(result =>{
    console.log(result)
}).catch(error => console.log(error)
)
task4.then(result =>{
    console.log(result)
    console.log("All tasks done");
}).catch(error => console.log(error)
)