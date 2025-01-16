//console.log("ritesh")
//console.log("This is my first program in javascript")
//let a=4
/*let b=6
 a=10
c=a+b
console.log(c)*/

/* for (let i = 0; i < 5; i++) {
   console.log("Hello World!");
}*/
//  pattern  of right angle
/* let str=" ";
 for(i=1;i<=5;i++)
 {
   for(j=1;j<=5;j++)
   {
     if(j<=i)
      str+="*";
   }
   console.log(str);
   str=" ";
     
 }*/

/* let n = 5;
 for (let i = 1; i <= n; i++) {
     let str = "* ";
     console.log(str.repeat(i));
 }
     const newObj = [
       {
       id: 1,
       order: 'Below 500',
       'order percentage': '10.05',
       restaurant: 'Punjabi Tadka',
       },
       {
       id: 2,
       order: '500-1000',
       'order percentage': '14.57',
       restaurant: 'Punjabi Tadka',
       },
       {
       id: 3,
       order: '1000-1500',
      
       'order percentage': '15.08',
       restaurant: 'Punjabi Tadka',
       },
       {
       id: 4,
       order: '1500-2000',
       'order percentage': '22.11',
       restaurant: 'Punjabi Tadka',
       },
       {
       id: 5,
       order: 'Above 2000',
       'order percentage': '38.19',
       restaurant: 'Punjabi Tadka',
       },
       ];
       for(let val of newObj)
       {
         console.log(val['order percentage'])
       }*/
//   async function hello()
//   {
//   console.log("Hello Javascript")
//   }
//   hello()

//   function api(){
//       return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//               console.log("Weather data")
//               resolve(200)
//           },2000)
//       })
//   }
//   api()
//   //await api() //it will throw an error

//   async function getweatherdata(){
//       await api();
//       await api();
//   }
//   getweatherdata()

//   function getdata(dataid){
//       return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//               console.log("data",dataid);
//               resolve("Success")
//           },2000)
//       })
//   }

//   async function getalldata(){
//       await getdata(1)
//       console.log("gettting all the data numbers in time span of 2 seconds each ....")
//       await getdata(2)
//       await getdata(3)
//       await getdata(4)
//       await getdata(5)
//   }
//   getalldata()
/* const person = {
     name: 'John',
     age: 30,
     greet() {
         console.log('Hello, my name is ' +
             this.name + ' and I am '
             + this.age +
             ' years old.');
             console.log(this);
     }
 };
 
 person.greet();*/

// const person = {
//     name: 'John',
//     sayHello: greet
// };

// const anotherPerson = {
//     name: 'Alice'
// };
// function greet() {
//     console.log('Hello, my name is ' + this.name);
// }



//   person.sayHello(); 
//   greet(); 
//   greet.call(anotherPerson);

//   function countnumbers(num){
//     if(num<=0){
//         //console.log(num);
//         //countnumbers(num-1)
//         return ;
//     }
//     else{
//       console.log(num);
//   countnumbers(num-1);
//     }


//   }
// countnumbers(10)

// const fs = require('fs')

// fs.writeFile("Hii.txt","This is a file created by node.js",(err)=>{

//     if(err){

//         console.log(err)

//     }

// })



//           const http = require('http');

// const server = http.createServer((req,res)=>{ 

//     res.write('<h1>This is my first Server Created</h1>')

//     console.log("Hi")

//     res.end()

// })

// const port = 4001;

// server.listen(port,()=>{

//     console.log('Server is running at http://localhost:'+port)

// })
// const os = require('os')

// console.log(os.arch())//architecture

// console.log(os.hostname())*///////////////////////

// console.log(os.homedir)

// console.log(os.version())

// console.log(os.tmpdir())

// console.log(os.release())

// console.log(os.platform())









// function findMinMax(arr) {
//   let minVal = arr[0];
//   let maxVal = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minVal) {
//       minVal = arr[i];
//     }
//     if (arr[i] > maxVal) {
//       maxVal = arr[i];
//     }
//   }
//   return [minVal, maxVal];
// }

// const arr=[30,40,12,24];
// console.log(findMinMax(arr));




function search(arr, x) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}