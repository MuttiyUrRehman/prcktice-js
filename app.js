
//         // class car {
//         //     construction(brand){
//         //         this.brand=brand;
//         //     }
//         //     start(){
//         //         return this.brand+' is starting...';
//         //     }
//         // }
//         // const mycar =new car('toyota');
//         // console.log(mycar.start());

// import { add } from "./math.js";
// console.log("fghfgh")
// //   import{ add } form "./math";
// //   console.log(add(2,4));


//  console.log(add(5,6));


// //  new class cat

// class animals{
//     constructor(name){
//         this.name= name;
//     }
// }
// class Cat extends animals{
//     speak(){
//         console.log(this.name+' meao');
//     }
// }
// const cat = new Cat('meao');
// cat.speak();

// // boy class

// class boy{
//     constructor(name){
//         this.name= name;
//     }
// }
// class Muttiy extends boy{
//     speak(){
//         console.log(this.name+'urdu');
//     }
// }
// const muttiy = new Muttiy('urdu');
// MIDIConnectionEventuttiy.soeak();


// const map = new Map();
// map.set('name', 'muttiy ur rehman');
// map.set(1, 'ID');
// console.log(map.size);









// Const map = new Map ();
// Map.set("name","muttiy ur rehman");
// Map.set(1,"ID")
// console.log(Map.length("name"));



// const set = new Set();
// set.add([1,2,3,4,5,6]);
// console.log(set);

console.log("start......");
setTimeout(()=>{
    console.log("async......");
},2000);
console.log("end");





// sir ka code




// MAPS
const map = new Map();
map.set("name", "Ahmed");
map.set("id", 123);
console.log(map.get("name"));
console.log(map.get("id"));

// SETS
// Use case #1:
const set1 = new Set([1, 2, 3, 4, 5, 2]);
console.log(set1);

// Use case #2:
const set2 = new Set();
set2.add([1, 2, 3, 4, 5, 2]);
set2.add([1, 2, 3, 4, 5, 2]);
set2.add([1, 2, 3, 4, 4, 2]);

console.log(set2);

// Use Case #3:
const set3 = new Set();
set3.add(1);
// const set3 = new Set([1]);
set3.add(1);
// const set3 = new Set([1, 1]);
set3.add(2);
// const set3 = new Set([1, 1, 2]);
console.log(set3);

// WeakMaps
let obj = {};

const weakMap = new WeakMap();
weakMap.set(obj, "Ahmed");
console.log(weakMap.get(obj));

// WeakSet
let obj2 = { 12: 12 };
const weakSet = new WeakSet();
weakSet.add(obj2);
console.log(weakSet);

// Asynchronous Call
console.log("Starting...");
setTimeout(() => {
  console.log("async...");
}, 2000);
console.log("End");