var add = function(x) {
    
    return function(y) {
      return x + y;
    };
};
console.log(add(5)(1));
//curry arrow function 
var added = x=> y=> x+y ;
console.log(added(5)(1));