class Animal{
    constructor(amountLegs, weight, sound,movement){
    this.amountLegs = amountLegs;//как делать с двумя словами?
    this.weight = weight;
    this.sound = sound;
    this.movement = movement;
    }
makeSound(){
        return console.log ('What does it say?'+this.sound);
    };
makeSomeMovements(){
        return console.log ('start to'+ this.movement);
    };
};

class Dog extends Animal{
    constructor (amountLegs, weight,movement){
    this.sound = 'гав';
    super.makeSound;
    super.makeSomeMovements;
    };
}

let pet = new Dog('4', '34','run');
pet.makeSomeMovements();
pet.makeSound();
//не могу запустить этот код, webdriverIO runner не подходит