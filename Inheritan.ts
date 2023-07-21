export {}
class Parent{
    Name:string;
    setName(name):string{
        return this.Name = name
        
    }

}

class Inheritan extends Parent{
    getName():string{

        // console.log(this.Name)
        return this.Name
    }
}

let user = new Inheritan()
user.setName("sushil karki")
console.log(user.getName())