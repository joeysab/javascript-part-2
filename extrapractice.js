  /* Create an array of objects (don’t need to use `new` here, just regular object literals). These objects will contain a `name` and `email` property. 
  Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.*/

var arrObj = [{
    name: "Jo",
    email:"jo@noemail.com"
},
{
    name: "codrian",
    email:"his@email.com"
},
{
    name:"AmandaSabbagh",
    email:"thecool@email.com"
}];


function sortNames(arr){
    return arr.sort(function(a,b){
        return a.name.length - b.name.length;
    });
}

console.log(sortNames(arrObj))