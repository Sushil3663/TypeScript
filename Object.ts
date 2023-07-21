export {}
// interface types{
//     name:string,
//     age:number,
//     address:string,
// }
interface types{
    name:string,
    age:any,
    address:string,
}

// let users:types ={
//     name: "Sushil",
//     age: 22,
//     address:"KTM"
// }
let users:any ={
    name: "Sushil",
    age: 22,
    address:"KTM"
}
users.name = "Ram"
console.log(users)