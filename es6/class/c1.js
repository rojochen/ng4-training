//建構函式
function Person(){
    this = {}
    this.run = function(){
        console.log(`${this.name} is running`);
    };
}
let kary = new Person();

console.log(kary.__proto__ );
let tony = {
    name :"Tony"
}
tony.__proto__ =  new Person()
 
console.log(tony.__proto__);
kary.name = "kary"
kary.run();
tony.run();