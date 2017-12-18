function Man(name) {  
    this.name = name;
}
Man.prototype.do = () => {  
  console.log(this); //{}
  return this.name;
};
Man.prototype.say = function() {  
  console.log(this); //Man object
  return this.name;
};
var man = new Man('Jack');  
man.say(); // => Man { name: 'Jack' }  
//man.do();//=>{}