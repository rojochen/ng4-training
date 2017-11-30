//let syntax
let count = 1
if(true){
    let count =10;
    let conut =11;
    console.log(count);
}
//es6 在{} 就是一個作用域(scope)
console.log(count);

//const syntax
const num =2000;
//num = 1999; //會報 Assignment to constant variable.
console.log(num);
//const syntax
{
    const num =9999;
    console.log(num);
}
console.log(num);
