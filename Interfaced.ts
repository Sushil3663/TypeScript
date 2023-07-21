export {}
// interface userTyped {
//     name:string,
//     age:number,
//     getname: ()=>number,
// }

// let user:userTyped ={
//     name:"sk",
//     age:22,
//     getname: ()=>{
//         return 10
//     }

// }
interface userTyped {
    name:string,
    age:number,
    getname: ()=>string,
}

let user:userTyped ={
    name:"sk",
    age:22,
    getname: ()=>{
        return "ram"
    }

}


console.log(user)
console.log(user.getname())