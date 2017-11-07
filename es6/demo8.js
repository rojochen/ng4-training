//demo this keyword in function
function fn(){
    console.log(this);
}
fn();
//demo this keyword in arror function
let fn1 = () =>{
    console.log("in arror function");
    console.log(this);
}
fn1();