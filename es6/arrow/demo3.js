//es5 this 指的是呼叫的物件(timeout)
setTimeout(function(){
    console.log('start timeout');
    console.log(this);
    console.log("end timeout");
},1000);

//es6 this 外層作用域的this
setTimeout(()=>{
    console.log('start arrow timeout');
    console.log(this);
    console.log("end arrow function")},
1000);

//es5.1 this 可以綁定到function
setTimeout(function(){
    console.log('start es5.1 timeout');
    console.log(this);
    console.log("end  es5.1 timeout");
}.bind(this),1000);