//  function double(num){
//             return num*2;  }
//         let arr= [2,3,4,5,6,7];
//         let doubleArr = arr.map(double);
//         console.log(doubleArr);
//         const tripled = arr.map((n)=>n*3);
//         console.log(tripled);

// function isOdd(num){
//     return num%2!==0;
// }
// let arr1 = [1,2,3,4,5];
// // let oddNum = arr1.filter(isOdd);    .filter() goes through each element of the array
// // and keeps only those elements for which the function returns true.
// console.log(oddNum);

// let arr= [3,4,5,6];
// const mupl = arr.map((n)=>(n*5));
// console.log(mupl);

// let arr2 =[1,2,3,4,5,6];
// let sum = arr2.reduce((product,current)=>{
//     return product * current} ,1 )
//     console.log(sum);

// let b = [1,2,3,4,5];
// const [one,...two]=b;   rest operator
// console.log(two);

// let b = [1,2,3,4,5];
// // destructuring Taking individual elements out of an array (or object) and storing them into separate variables
// const [one,,two]=b;   
// console.log(two);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello, Node.js Server!");
// });

// server.listen(3000, () => console.log("Server running on port 3000"));

// let b =[1,2,3,4,5]
// const[one,...two]=b;
// console.log(two);
// let num =[0,...b,6,7]
// console.log(num)

// let b =[1,2,3,4,5]
// let num =[0,...b,6,7]
// const obj1 = {x:3,y:5}
// const obj2 = {y:6,z:7}
// const spread ={...obj1,...obj2}
// console.log(spread);

//macrotime  - the program will run after particular time
// const promise = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         const success = true;
//         if(success){
//             resolve ("Resolved successfully");             
//         }else{
//             reject("rejected");
//         }
//     },2000)
// })

// async function fetchApi(){
//     try {
//         const response = await(fetch)(
//             "https://jsonplaceholder.typicode.com/users"
//         )
//         const data = await response.json();
//         data.map((user)=>{
//             console.log(user.name)
//         })
//       }  catch (error){
//             console.log(error);
//         }
//     }
// fetchApi();

let name = "Sowndarya";
let age = 19;
console.log(`My name is ${name} and my age is ${age}`);
