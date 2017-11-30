let myFun1 = () => console.log("hello arror function");
myFun1();
let myFun2 = () => 1+3;
console.log(myFun2());
//不會return 4
let myFun3 = () => console.log("hello arror function"); 1+3;
console.log(myFun3());

[1,2,3,4,5].forEach(v =>  console.log(v));