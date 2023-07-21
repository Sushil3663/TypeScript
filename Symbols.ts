//Symbols give unique id which is not visible
let s1 = Symbol()
console.log(s1)

let s2 =Symbol("d1")
console.log(s2)

console.log(s1===s2)

let demoS1 = Symbol()
class user{
    [demoS1](name:string):string{
        return name

    }

}let obj = new user()
console.log(obj[demoS1]("pk"))

// class user{
//     [demoS1]():string{
//         return "Hello World"

//     }

// }let obj = new user()
// console.log(obj[demoS1]())