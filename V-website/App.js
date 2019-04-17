var a = "Sirinya";
console.log(a.length);
let b = ['1', '2', '3'];
b.pop();
b.push('4', '5');
console.log(b); 
function mul(a,b){
    console.log(a-b);
}
mul(20,5);
function next(arr,item){
    return item;
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
var collection = {
    "000": {
        "a":"mayy",
        tracks:[]



    },
    "011": {
        "a":"mu",
        tracks:[]



    }
}
var copy = JSON.parse(JSON.stringify(collection));
function update(id,prop,value){
    if(value === ""){
        // delete collection[id][prop];
    }else if (prop === "tracks"){
        collection[id]
    }
    return collection;
}

console.log(collection);
