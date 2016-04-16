function randBetween(a, b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
}

function fight(character1, character2){
    return (character1.name + " rushes to the arena with " + character2.name);
}

function faceOff(opponent) {
    if ( this.power > opponent.power){
        return('I killed you charmout!');
    } else {
        return("OUCH! I'm dying.....");
    }
}
function Warrior (name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = randBetween(1,100);
}

Warrior.prototype.faceOff = faceOff;
Warrior.prototype.fight = fight;

var warrior1 = new Warrior("Jay", "M");
var warrior2 = new Warrior("Mike", "M");

console.log(warrior1.faceOff(warrior2));
console.log(warrior2.faceOff(warrior1));