function randBetween(a, b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
}

function randType (){
    var num = randBetween(1,3);
    if (num === 1) {
        return "grass";
    }else if (num === 2) {
        return "rocks";
    }else if (num === 3) {
        return "water";
    }
}

function randCondition (){
    var num = randBetween(1,3);
    if (num === 1) {
        return "burning";
    }else if (num === 2) {
        return "normal";
    }else if (num === 3) {
        return "frozen";
    }
}

function Tile (x, y){
    this.x = x;
    this.y = y;
    this.height = randBetween(1,3);
    this.type = randType();
    this.condition = randCondition();
    this.freeze;
    this.burn
}

Tile.prototype = {
    freeze: function (){
        if (this.condition === "burning") {
             this.condition = "normal";
        } else if (this.condition === "normal") {
             this.condition = "frozen";
        } else if (this.condition === "frozen") {
             this.height++
        }
    },
    burn: function(){
        if (this.condition === "burning") {
             this.height--;
        } else if (this.condition === "normal") {
             this.condition = "burning";
        } else if (this.condition === "frozen") {
             this.condition = "normal"
        }
    }
}

var tile1 = new Tile(20,20);

function displayGrid (){
    var mainArr=[];
    
    for (var i=0; i<20; i++){
        var row = [];
        for (var x= 0; x<20; x++){
            Tile(x).push(row)
        }
    }
    return mainArr
}
console.log(tile1)