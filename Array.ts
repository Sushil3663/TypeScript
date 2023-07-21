export {};
// let a:string[] = ["sk","pk","ck",10,true]
let a: string[] = ["sk", "pk", "ck"];
let x: string[] = ["sk", "pk", "ck", "dk"];
let y: string[] = ["sm", "Ns"];
let z: string[] = x.concat(y);
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; //[ 'Lemon', 'Apple', 'Mango' ]
// const citrus = fruits.slice(2);
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); // [ 'Orange', 'Lemon' ]
// console.log(citrus)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

// a.push("dk")
// a.pop()
// a.shift()
// a.unshift("RM")
// a[3] = 100
// a.push(false)
// let b = a.toString()
// let c = a.join("/")
// let d = delete a[1]

console.log(a);
// console.log(b)
// console.log(c)
// console.log(d)
console.log(z);

console.log(a.length);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
