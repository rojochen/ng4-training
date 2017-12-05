//預設值參考第一個參數
function isEqual(num , compare=num){
    console.log(num);
    console.log(compare);
    return num===compare;
}
console.log(isEqual(10,11));//false
console.log(isEqual(10));//true
//arrow function style
let equal =(num,compare=num)=> num===compare;
console.log(equal(12,11));
console.log(equal(200));
