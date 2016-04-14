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

console.log(sortingArr("hey", "nononononoo", "hihihihihi", "dakjb"))