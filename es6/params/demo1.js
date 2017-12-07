//es5 style ,
function multiply(a, b) {
    //validate args
    b = (typeof b !== 'undefined') ?  b : 1;
    return a * b;
  }
/*
es6 style
function multiply(a, b = 1) {
  return a * b;
}*/
multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5