export {}

class Classes{
    // name="Sushil"
    Name:string = "sus";
    constructor(name:string){
        this.Name = name

    }
    getName = ():string=>{
        // console.log(this.Name)
        return this.Name

    }
}

let obj = new Classes('sk')
// obj.getName()
console.log(obj.getName())
