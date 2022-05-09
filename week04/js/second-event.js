// Constructor Functions: 

// const dice = {
//     sides: 6,
//     roll() {
//         return Math.floor(this.sides * Math.random() + 1)
//     }    
// }

// const Dice = function(sides=6){
//     this.sides = sides;
//     this.roll = function() {
//         return Math.floor(this.sides * Math.random() + 1)
//     }
// }

// Class declaration method:
// class Dice {
//     constructor(sides=6) {
//         this.sides = sides;
//     }

//     roll() {
//         return Math.floor(this.sides * Math.random() + 1)
//     }

//     static description() {
//         return 'A way of choosing random numbers'
//     }
// }

// const redDice = new Dice();

// redDice instanceof Dice

// redDice.sides

// redDice.roll()

// const blueDice = new Dice(20);

// blueDice instanceof Dice

// blueDice.sides

// blueDice.roll()


// Dice.description()


class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('Leonardo');
leo.name;
leo.sayHi();

Turtle.prototype;
Turtle.prototype.weapon = 'Hands';
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
}

const raph = new Turtle('Raphael');
raph.name;
raph.sayHi();
raph.weapon;
raph.attack();

const don = new Turtle('Donatello');
don.weapon;