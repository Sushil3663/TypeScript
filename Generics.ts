const user = (data:string):string =>{
    return data
}

console.log(user("Sushil"))

const users = (data:object):object =>{
    return data
}
console.log(users({name:"sushil", age:22}))


function User<T>(data:T):T{
    return data
}
console.log(User({name:"Ujjwal", age:22}))


const Users = <T> (data:T):T=>{
    return data
}
console.log(User({name:"Ram", age:22}))
