var Person = function (firstName) {
    //es6 function 也可是類別,這個function表示自己的constructor
    this.firstName = firstName;
    this.getFullName = function(){
        //第一次的取lastName,取不到去找_proto_物件找。
        console.log(this.firstName + this.lastName);
    }
};
//Person.prototype 也是物件
Person.prototype.lastName = "Wang"
Person.prototype.greeting = function() {
    console.log("Hello, I'm " + this.firstName + "" + this.lastName);
};
var p = new Person('roger');
p.getFullName();
p.lastName = 'chen'; //重新設定自己的lastName
console.log(p.__proto__.lastName);//print wang
console.log(p.lastName) //print chen
p.greeting();