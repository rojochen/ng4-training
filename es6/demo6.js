let myFun1 = () => console.log("hello arror function");
myFun1();
let myFun2 = () => 1+3;
console.log(myFun2());
//don't
let myFun3 = () => console.log("hello arror function"); 1+3;
console.log(myFun3());