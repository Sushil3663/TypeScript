"use strict";
// function add<T>(numbers):T{
//     return numbers.reduce((acc,item)=>{
//         return acc + item
//     },0)
Object.defineProperty(exports, "__esModule", { value: true });
// }
// console.log(add([1,2,3]))
// export {}
// function add(numbers:number[]){
//     return numbers.reduce((acc,item)=>{
//         return acc + item
//     },0)
// }
// console.log(add([1,2,3]))
// export {}
// function add(numbers:Array<number>){
//     return numbers.reduce((acc,item)=>{
//         return acc + item
//     },0)
// }
// console.log(add([1,2,3]))
//type Alias(custom type)
// export {}
// type User={
//     name: string
//     age: number
//     address?: string
// }
// const login = (users:User):User =>{
//     return users
// return {name:"sd",age:22}
// }
// const user:User = {
//     name: "John",
//     age: 22
// }
// console.log(login(user))
// console.log(login({name:"John",age:22}))
// type user = number;
// let a:user = 10
// let b:number = 1
// INTERFACES TYPED
// export {}
// interface Transactions{
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }
// interface BankAccount{
//     accountNumber: number;
//     accountHolder: string;
//     balance:number;
//     isActive: boolean;
//     transaction: Transactions[]
// }
// const transaction1: Transactions = {
//     payerAccountNumber: 1705751047194001,
//     payeeAccountNumber: 2454521723
// }
// const transaction2: Transactions = {
//     payerAccountNumber: 1705751047194001,
//     payeeAccountNumber: 2454521723
// }
// const bankAccount:BankAccount = {
//     accountNumber: 123445,
//     accountHolder: "John",
//     balance : 300000,
//     isActive: true,
//     transaction: [transaction1,transaction2]
// }
// console.log(bankAccount)
// interface Book {
//     name: string;
//     price: number;
// }
// interface EBook extends Book{
//     // name: string;
//     // price: number;
//     fileSize: number;
//     formate: string;
// }
// interface audioBook extends EBook{
//     // name: string;
//     // price: number;
//     // fileSize: number;
//     // formate: string;
//     duration: number
// }
// const book: audioBook ={
//     name: "One Piece",
//     price: 2000,
//     fileSize: 22,
//     formate: "Italic",
//     duration: 10
// }
//Merging interface
// interface Book {
//     name: string;
//     price: number;
// }
// interface Book{
//     fileSize: number;
//     formate: string;
// }
// const book : Book = {
//     name: "One Piece",
//     price: 2000,
//     fileSize: 22,
//     formate: "Italic",
// }
// We cannot merge type alias and extends  like interface.
// type Book = {
//     name:string;
// }
// type Book = {
//     price:number;
// }
// type book = string
// type age = number
// cannot be done
// interface user extends string{
// }
//union
// type data = string | number;
// const info = (id:data) =>{
//     if(typeof id==="string"){
//         console.log(id.toUpperCase())
//     }
//     else{
//         console.log(id)
//     }
// }
// info("Hello")
// const getFirstThree = (num: string | number[]):string| number[] =>{
//     return num.slice(0,3)
// }
// console.log(getFirstThree([1,2,3,4,5]))
// Generics
//if we use any we will lost type .
// const info = (item:any)=>{
//     console.log(item)
//     return item
//  }
//  info([1,2,3])
//  const data = (item:number[])=>{
//     console.log(item)
//     return item
//  }
//  data([1,2,3])
//  const user =<T> (item:T):T =>{
//     console.log(item)
//     return item
//  }
//  user({name:"sk",age:22})
// interface HasAge{
//     age:number;
// }
// function getOldest<T extends HasAge>(people:T[]):T{
//     console.log(people)
//     return people.sort((a,b)=>b.age - a.age)[0]
// }
// const people : HasAge[] = [{age:22},{age:32},{age:25}]
// console.log(getOldest(people))
// interface user {
//     name:string;
//     age:number;
// }
// const person: user[] = [
//     {name:"john",age:22},
//     {name:"joe",age:32},
//     {name:"jane",age:25}
// ]
// console.log(getOldest(person))
//Assertion
// const player = getOldest(person) as user;
// player.name
//Generic
// const player = getOldest(person) 
// console.log(player.name)
// console.log(player)
// interface IPost {
//     title: string;
//     id: number;
//     description: string;
// }
// interface IUser {
//     id: number;
//     name: string;
//     age : number;
// }
// const fetchPostData = async(data: string): Promise<IPost[]> =>{
//     const response = await fetch(`http://127.0.0.1/api/user${data}`);
//     return response.json();
// }
// const fetchUserData = async(data: string): Promise<IUser[]> =>{
//     const response = await fetch(`http://127.0.0.1/api/user${data}`);
//     return response.json();
// }
// const fetchData = async<T extends IUser[]>(data: string): Promise<T> =>{
//     const response = await fetch(`http://127.0.0.1/api/user${data}`);
//     return response.json();
// }
// const fetchData = async<T>(data: string): Promise<T> =>{
//     const response = await fetch(`http://127.0.0.1/api/user${data}`);
//     return response.json();
// }
// (async()=>{
//     const postData = await fetchPostData("/posts")
//     postData[0].description
//     const userData = await fetchUserData("/users");
//     userData[0].age
// const userData = await fetchData<IUser[]>("/users");
// userData[0].age
// })();
//structural typing or duck typing
// interface ICredential {
//     userName : string;
//     password : string;
//     isActive : boolean;
// }
// const login = (credential : ICredential): boolean =>{
//     console.log(credential)
//     return true
// }
// const user = {
//     userName: "sk",
//     password :"abc123",
//     isActive: true
// }
// const login = (credential : ICredential): boolean =>{
//     console.log(credential)
//     return true
// }
// const user:ICredential = {
//     userName: "sk",
//     password :"abc123",
//     isActive: true
// }
// console.log(login(user))
// interface UserTyped {
//     name: string;
//     age: number;
//     getName : () => boolean;
//     user(address:string):string;
// }
// const User: UserTyped ={
//     name: "sk",
//     age: 22,
//     getName:() => {return true},
//     user(sk){
//         return "sk"
//     }
// }
