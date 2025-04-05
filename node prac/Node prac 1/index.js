// const students = [
//     {name: 'Ali', marks: 75},
//     {name: 'Farid', marks: 82},
//     {name: 'John', marks: 90},
//     {name: 'Alice', marks: 67},
// ]
// let totalMarks = 0;
// students.forEach((val)=>{
//     console.log(val.name + " : " + val.marks);
//     totalMarks += val.marks;
//     if (val.marks >= 80) {
//         console.log(`congratulations ${val.name}. you have got ${val.marks}`);
        
//     }
    
// })

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 300 },
//     { name: "Headphones", price: 150 }
// ];

// // products.map((val)=>{
// //     const prev = val.name + ' : ' + val.price;
// //     let dic = 0.1 * val.price;
// //     console.log(`${val.name}   :  ${val.price-dic}`);
// //     console.log("Previous prices", prev);
// // })

// const discount = products.map((val)=>{
//     return{
//         name: val.name,
//         price: val.price - (0.1 * val.price)
//     }
// })
// console.log(discount);
// filter method 
// ye method array me sy koi specific value jo user ko require ho us ki tadad jitni marzi ho wo ik array me return kr dyta ha.

// const students = [
//     { name: "Ali", marks: 75, attendance: 80 },
//     { name: "Sara", marks: 85, attendance: 90 },
//     { name: "John", marks: 90, attendance: 70 },
//     { name: "Zara", marks: 88, attendance: 95 },
//     { name: "Tom", marks: 78, attendance: 82 },
//     { name: "Anna", marks: 92, attendance: 85 }
//   ];

//   const filterStudents = students.filter((val)=>{
//     return val.marks >= 80 && val.attendance >= 75 
//   })
//   const increaseMarks = filterStudents.map((score)=>{
//     return {
//         name: score.name,
//         marks: score.marks + 5,
//         attendance: score.attendance
//     }
//   })
// increaseMarks.forEach((eff)=>{
//      console.log(eff.name + " : " + eff.marks);    
// })


// find method 
// ye method array me sy koi first or single value return krta ha jo user ko require ho.
// For example: arr = [1,2,2,4,3,2,13]
// i want to check 2 in this array it will return 2 only single time.


// IndexOf method 
// this method is used to find the value in the array.
// hum indexof me koi random number find kr sakty han agr specific number array me ho to us ka index return kr diya jata ha.
// agr number nahi milta to -1 return ho jata ha.
// For example: indexOf(23) 


// const students = [
//     { id: 1, name: "Ali", marks: 85, attendance: 92 },
//     { id: 2, name: "Sara", marks: 76, attendance: 88 },
//     { id: 3, name: "John", marks: 90, attendance: 95 },
//     { id: 4, name: "Zara", marks: 65, attendance: 70 },
//     { id: 5, name: "Tom", marks: 82, attendance: 60 },
//     { id: 6, name: "Anna", marks: 91, attendance: 97 }
//   ];

//   const findStudent = students.filter((val)=>{
//     return val.marks >= 80 && val.attendance >= 90
//   })
//  const exceStudents = findStudent.map((std)=>{
//     return{
//         name: std.name,
//         marks: std.marks+5,
//         attendance: std.attendance
//     } 
//  })

//  exceStudents.forEach((starStudents)=>{
//     console.log(`${starStudents.name} has recieved ${starStudents.marks} marks after bonus! congratulations.`);
//  })

//  const findStd = students.find((finds)=>{
//     return finds.name == "Tom"
//  })
//  console.log("Tom's Details:" ,findStd);
 
//  const finalStep = students.findIndex((vall)=>{
//     return vall.name == "Zara"
//  })
//  console.log(`Zara is at index: ${finalStep}`);
 



//  <=============== objects ===============>
   // we find arrays length 
   // we also find functions length... no. of parameter of function is the length of the function.
   // For example: function stdName(a,b,c){parameters are len of function}
   // function ki type js me ik function ha. but it is an object

// 1) Exercise simple object

   // const book ={
   //    titel: "My Life",
   //    author: "H Artaza",
   //    pages: 300
   // }
   // console.log(book.titel, book.author, book.pages);
   // book.titel = "My Problems"
   // book.author= "Hafiz Artaza"
   // book.pages= 350
   // console.log(book['titel'], book['author'], book['pages']);
    
// 2) Exercise function in objects

// const car={
//    brand: "BMW",
//    color: "Bold Black",
//    model: "2026 model",
//    start: ()=>{
//       return "car started successfully"
//    }
// }
// console.log(car.brand, car.color, car.model);

// console.log(car.start());
// agr hum function ko objects me sy access krna chahta han to hum sirf dot(.) method use kr sakty han dosra method invalid ha.

// 3) Exercise nested object

// const employee = {
//    name: 'Arslan Ali',
//    age: 24,
//    contact: {
//       email: 'arslanAli@gmail.com',
//       phone: '01712345678'
//    }
// }
// console.log(employee['name'], employee['age']);
// console.log(employee.contact.email);
// console.log(employee.contact.phone);

// 4) Exercise forin loop used for objects

// const mobile ={
//    brand: 'oppo',
//    color: 'black',
//    price:  33500,
//    model: '2023 model'
// }
// for(let i in mobile){
//    console.log(i + " : "+ mobile[i]);
// }

// 5) Exercise of object destructuring

// destructuring me hum objects ke andr wali tamam values ko separate variables assign hota han
// ye values ko variable assign krna ka sab se assan treka ha.

// const student ={
//    name: 'Arslan Ali',
//    age: 24,
//    course: 'Computer Science',
//    contact: {
//       email: 'arslanAli@gmail.com',
//       phone: '01712345678'
//    }
// }
// let{name, age, course, contact} = student;

// console.log(name, age, course, contact.email, contact.phone);