//Question 1

function sortingArr(str1,str2, str3, str4){
    var arr = []
    arr.push(str1, str2, str3, str4)
    arr = arr.sort(function(a,b){
        if (a.length < b.length){
            return 1;
        }else if(a.length > b.length) {
            return -1;
        } else {
            return 0;
        }
    })
    return arr[0];
    
}

//console.log(sortingArr("hey", "nononononoo", "hihihihihi", "dakjb"))

//Question 2
var arr = [
    {
        name: "Ziad",
        email: "ziad@noemail.com"
        
    },
    {
       name: "joseph",
       email: "joseph@noemail.com"
    }
    ];
    
    var arrName =[]
    for(var i = 0; i < arr.length; i++){
        arrName.push(arr[i].name)
    };
    
var resultName = arrName.sort(function(a,b){
    if (a.length< b.length){
        return 1;
        
    }else if (a.name < b.name) {
        return -1;
        
    } else {
        return 0;
    }
});


var arrEmail = []
for (var i = 0; i < arr.length; i++){
    arrEmail.push(arr[i].email)
};

arrEmail.sort(function (a,b){
        if (a > b){
        return 1;
        
    }else if (a < b) {
        return -1;
        
    } else {
        return 0;
    }
});


//console.log(arrName);
//console.log(arrEmail)

//Question 3
function squareRoot(num){
   var result = num.map(function(num){
       return num * num;
   });
   return result;
}
console.log(squareRoot([25]));

//Question 4

var obj1 = {
    name: "joe",
    num: [25]
};

function objectSquare (obj){
    var result = obj.num.map(function(num){
       return num * num;
    })
    return result;
}

console.log(objectSquare(obj1))

//Question 5
function operationMaker (operation) {
    if (operation === "add"){
        return function(a,b){
            return a+b;
        }
    }else if (operation === "substract"){
        return function(a,b){
            return a-b;
        }
    }else if(operation === "mult"){
        return function(a,b){
            return a * b;
        }
    }else if(operation === "div"){
        return function(a,b){
            return a/b;
        }
    }
};

var adder = operationMaker("add");
var sum = adder(5, 10); 

var multiplier = operationMaker("mult");
var product = multiplier(5, 10);

var substract = operationMaker("substract");
var difference = substract(10,7);

var divide = operationMaker("div");
var ratio = divide(10,5);

console.log(sum, product, difference, ratio)