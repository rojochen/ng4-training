class Person{
    //firstName , lastName Attribute
    firstName
    lastName
    constructor(firstname){
        //建構子
        this.firstName = firstname;
    }
    getFullName = function(){
        console.log(this.firstName + this.lastName);
    }
    greeting(){
        console.log("Hello, I'm " + this.firstName + "" + this.lastName);        
    }
}
var p = new Person('roger');
p.getFullName();
p.lastName = 'chen'; //重新設定自己的lastName
console.log(p.__proto__.lastName);//print wang ; 一樣也是prototype based
console.log(p.lastName) //print chen
p.greeting();