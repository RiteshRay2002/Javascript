console.log("Hi I'm String")
//let str2=prompt("enter you name");
str1 = "@";
str2 = "Riteshkumar"
let str = str1.concat(str2);
console.log(str + (str2.length));//concat and find length of string
console.log(str2.charAt(2));// To find index charactor value
console.log(str2.replace("R", "t"));//for replace the any index value
//To find the average of array
let array = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of array) {
    sum = sum + val;
    // console.log(val);
}
let avg = sum / array.length;
console.log(avg);
//10% off on all items
let items = [250, 645, 300, 900, 50];
let dis;
let i = 0;
for (let val of items) {
    dis = val * 10 / 100;
    // val-=dis;
    items[i] = items[i] - dis;
    console.log(items[i]);
    i++;
}

console.log(items[3]);
var arr = [8, 12, 32, 1, 2, 3, 4]
console.log(arr)
arr.push(5, 9) //adding the elements into the end of arrays
console.log(arr)
/* var objA={prop: 42};
 var objB= objA;
 objB={};
 console.log(objA)*/
let arr1 = ["Bloomerg", "microsoft", "uber", "goole", "IBM", "Netflix"];
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.splice(1, 1, "ola");
console.log(arr1)
arr1.push("Amazon");
console.log(arr1);
// Return the number of vowel
function countvowel(str) {
    let cout = 0;
    for (let val of str) {
        // console.log(val);
        if( val==="a"||val==="e"||val==="i"||val=="o"||val=="u")
            cout++;
        else
        {

        }
    }
    return cout;
}
let nam = "aeiou"
console.log(countvowel(nam));
// Arrow function
let cout=(str)=>{
  let cou=0;
  for(let val of str)
    {
        if( val==="a"||val==="e"||val==="i"||val=="o"||val=="u")
            cou++;
    }  
    return cou;
}
console.log(cout("aeiou"));

console.log("ritesh".toUpperCase());
let arr2=[2,3,4,5,6];
arr2.forEach(( val)=>{
    
    console.log(val**2);

})

Date(nam);
pr4jg()
fsjreglj;f
