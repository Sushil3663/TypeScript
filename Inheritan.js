"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    setName(name) {
        return this.Name = name;
    }
}
class Inheritan extends Parent {
    getName() {
        // console.log(this.Name)
        return this.Name;
    }
}
let user = new Inheritan();
user.setName("sushil karki");
console.log(user.getName());
