// "use strict";

const { func } = require("prop-types");

//  const docs=document.write('Hello, World!');
//.....hello world print

//  const doss="hello";
//  console.log(doss);
//  const dosss="world";
// }
// javascript();
// var a=10;
// console.log(a);
// var a=20;
// console.log(a)




//! hoisting value
// hoistedVariable = 3;
// console.log(hoistedVariable); 
// var hoistedVariable;

// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
//   } 
//   doSomething();
 
//   function falses(){  
//     let x = 30;
//     let y = 25;   
//         if(x<30) { 
//         return console.log(x) ;
//         }else{ 
//                 console.log(y);
//             } 
// }
// falses();



//!Nan number
// var notAnumber=NaN;
// console.log(NaN);


//!type of 
// var a="chaitanya";
// console.log(typeof a);



//!call by reference
// var objs={
// name:"chaitu",
// age:23
// }
// var objs2=objs;
// console.log(objs2);

// objs2.name="chaitu";
//document.write('Hello, World!');



// //!call by value

// var x=10;
// var y=x;
// y=20;
// console.log(y);


// let c=10;
// let a=10;
// let b=20;
// console.log(a);
// console.log(b);
// console.log(c);
// const x=10;
// console.log(x);


//!higherOrder
// function higherOrder(fn) {
//     fn();
//   }
     
//   higherOrder(function() { console.log("Hello world") });

// const radius=[1,2,3,4,5];
// const radiusfunct=function(radius){
// const output=[];
// for(let i=0; i<radius.length; i++){
//     output.push(Math.PI *radius[i] * radius[i]);

// }
// return output;
// }
// console.log(radiusfunct(radius));

 //var ans=["a","b","c","d"];


//!lenght of string
// let lengh="hello world"
// const abc=lengh.length;
// console.log(abc);

// let obj = [
//     {"name": "India", "code": "IND"}, 
//     {"name": "Bharat", "code": "BHAR"}, 
//     {"name": "Delhi", "code": "DEL"}, 
//     {"name": "Hyderabad", "code": "HYD"}
//   ];
//   // the code you're looking for
//   let country = 'BHAssss';
//   // iterate over each element in the array
//   for (let i = 0; i < obj.length; i++){
//     // look for the entry with a matching `code` value
//     if (obj[i].code == country){
//        // we found it
//       // obj[i].name is the matched result
//     }
//     console.log(country)
//   }


// //!filter function 
// const age = [32, 33, 16, 40];

// const helloworlds = (ages) =>{
//     return ages>=18;
// }
// helloworlds(age);

// const hello=age.filter(helloworlds);
// console.log(hello);


// //!this key word
// function doSomething() {
//     console.log(this);
//   }
     
//   doSomething();



// //!Memoization
// function addTo256(num){
//     return num + 256;
//   }
//   addTo256(20); // Returns 276
//   addTo256(40); // Returns 296
//   addTo256(20); // Returns 276



//!memorized function
// function memoizedAddTo256(){
//     var cache = {};
  
//     return function(num){
//       if(num in cache){
//         // console.log("cached value");
//         return cache[num]
//       }
//       else{
//         cache[num] = num + 256;
//         console.log("cached value");

//         return cache[num];
//       }
//     }
//   }
//   var memoizedFunc = memoizedAddTo256();
  
//   memoizedFunc(20); // Normal return
//   memoizedFunc(20); // Cached return

// function computeSum(arr){
//     if(arr.length === 1){
//       return arr[0];
//     }
//     else{
//       return arr.pop() + computeSum(arr);
//     }
//   }
//   console.log(computeSum([7,3])); // Returns 123



//!Contractor
// function person(name,age,gender){
//     this.name =name;
//     this.age =age;
//     this.gender=gender ;
//   }
//   console.log(person)
  
  
//   var person1 = new person("Vivek", 76, "male");
//   console.log(person1);
  
//   var person2 = new person("Courtney", 34, "female");
//   console.log(person2);

  //console.log(Person)


  //!rest operator 
  // function addAllArgs(...args){
  //   let sumOfArgs = 0;
  //   let i = 0;
  //   while(i < args.length){
  //     sumOfArgs += args[i];
  //     i++;
  //   }
  //   return sumOfArgs;
  // }
  
  // addAllArgs(6, 5, 7, 99); 
  // addAllArgs(1, 3, 4); 


  
  //!speard operator for arrays

//   let a=[1,2,3,4,5];
//   let b=[1,2,3,4];
//   const mergeArray=[
//     ...a,
//     ...b
// ]
// console.log(mergeArray)



//!speard operator for object

// const obj01={
//   name:"chaitu",
//   age:23
// }
// const obj02={
//   name:"John",
//   age:24
// }

// const mergeObject={
//    ...obj01,
//    ...obj02
  
// };

// console.log(mergeObject);

// const restnum=[1,2,3,4,5,6,7,8,9];
// //console.log(number[2]);
// const [first,second,third,fourth,...rest]=restnum
// console.log(second);

// const data = ['Chaitanya', 23, "html"];



// //! old way of destructing
// const names = data[0];
// const age = data[1];
// const subject = data[2];
// console.log(names);
// console.log(age);
// console.log(subject);


// //! New way of destructing
// const datas = ['Chaitanya', 24, "Javascript"];
// const[namess,ages,subjects]=datas
// console.log(namess);
// console.log(ages);
// console.log(subjects)


//!Rest operator is only use for function argument and for destursturing  it allow the function to accept infifnite number of argument in a function in a array format

// function restOperator(...num){
// console.log(num);
// }
// restOperator(1,2,3,4);


// //! 1.> Ternary operator 
// function renderApp() {
//   document.getElementById("Header").innerHTML = "Welcome!";
// }

// function renderLogin() {
//   document.getElementById("Header").innerHTML = "Please log in";
// }

// let authenticated = true;

// ! 1 <i> without ternanry operator
// if (authenticated) {
//   renderApp();
// } else {
//   renderLogin();
// }]

// //! 1  <ii> with ternanry operator

// authenticated ? renderApp() : renderLogin();

// function sumOfThreeElements(...elements){
//   return new Promise((resolve,reject)=>{
//     if(elements.length > 3 ){
//       reject("Only three elements or less are allowed");
//     }
//     else{
//       let sum = 0;
//       let i = 0;
//       while(i < elements.length){
//         sum += elements[i];
//         i++;
//       }
//       resolve("Sum has been calculated: "+sum);
//     }
//   })
// }
// sumOfThreeElements(333,4,4);
// console.log(Promise)
// //console.log(sumOfThreeElements);
// const newSet = new Set([4, 5, 6, 7]);
// console.log(newSet);
// const WeakSetSet=[1,2,3,4]
// const newSet2 = new WeakSetSet();
// console.log(newSet2);

// //!object destructure
// const classDetails = {
//   strength: 78,
//   benches: 39,
//   blackBoard:1
// }

// const {classStrength,classBenches,classBlackBoard} = classDetails;

// console.log(classStrength); // Outputs 78
// console.log(classBenches); // Outputs 39
// console.log(classBlackBoard); // Outputs 1






async function chaitu(){
  console.log("first");
  console.log("second");
   setTimeout(()=>{
      console.log("third");
  },10000)
   
 console.log("fourth")
  console.log("fifth")
}
chaitu();

// let count=0;

// let consoles= document.getElementById("head").addEventListener("click",function abc(){
//   btncount=count+1;
//   console.log("clicked",btncount+1);
//   document.getElementById("head").innerHTML=btncount;
// })
// abc()
// const howTexts = document.getElementById('showText');
// const btnclicks = document.getElementById('btnclick');
// const textcontents = document.getElementById('textcontent');

// function btnclicked(a,b,c,d){
//       let sumOfNum=(a+b+c+d);
//       document.write(sumOfNum)
// }
// btnclicked(2,3,4,5,9,9,9,9,9);
const howTexts = document.getElementById('showText');
const btnclicks = document.getElementById('btnclick');
const tbuser = document.getElementById('tbuser');


function fun1(){
  howTexts.innerHTML=tbuser.value;
}
btnclicks.addEventListener("click",fun1);

let imgs='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
function img(){
return {imgs}
} 
img();

<h1>{imgs}</h1>




