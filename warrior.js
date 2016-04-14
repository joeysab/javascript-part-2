function randBetween(a, b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
}

function fight(character1, character2){
    console.log(character1.name + " rushes to the arena with " + character2.name);
}

function faceOff(opponent) {
    if ( this.power > opponent.power){
        console.log('I killed you charmout!');
    } else {
        console.log("OUCH! I'm dying.....");
    }
}
function Warrior (name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = randBetween(1,100);
    this.fight = fight;
    this.faceOff = faceOff;
}

var warrior1 = new Warrior("Jay", "M");
var warrior2 = new Warrior("Mike", "M");

console.log(fight(warrior1, warrior2));
console.log(warrior1.faceOff(warrior2));