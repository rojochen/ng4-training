//es5 this 指的是呼叫的物件
setTimeout(function(){
    console.log('start timout');
    console.log(this);
    console.log("hello timeout");
},1000);

//es6 this 指的是自己的物件(跟java比較像)
setTimeout(()=>{
    console.log('start arrow timout');
    console.log(this);
    console.log("hello arrow function")},
1000);

//es5.1 this 可以綁定到function
setTimeout(function(){
    console.log('start es5.1 timout');
    console.log(this);
    console.log("hello  es5.1 timeout");
}.bind(this),1000);