"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Classes {
    constructor(name) {
        // name="Sushil"
        this.Name = "sus";
        this.getName = () => {
            // console.log(this.Name)
            return this.Name;
        };
        this.Name = name;
    }
}
let obj = new Classes('sk');
// obj.getName()
console.log(obj.getName());
