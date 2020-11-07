// Build an object oriented sort of connection between a Fruit and an Apple.
// • Every fruit should have the name, color properties and methods naming ripe,
// grow.
// • The Apple fruit should have properties of type, variety and also all other
// additional methods. Any sort of Object oriented model is fine.

class Fruits{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    namingRipe(){
        console.log(`${this.name} get ripe.`);
    }
    grow(){
        console.log("Fruit is growing");
    }
}
class Apple extends Fruits {
    constructor(color,type,variety) {
      super('Apple',color); // call the super class constructor and pass in the name parameter
      this.type=type;
      this.variety=variety;
    }
    kashmirApple(){
        console.log(`${this.type}  is Delicious Apple `);
        console.log(`${this.variety} is soft and sweet Apple`);
    }
}

let a = new Apple('Red','Fuji','Crisp');
a. namingRipe();
a.grow();
a.kashmirApple();

console.log('===============================================');

let b = new Apple('Green','Delicious','Creeamy White');
b. namingRipe();
b.grow();
b.kashmirApple();