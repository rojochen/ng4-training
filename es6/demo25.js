function f() {
    return [1, 2, 3];
  }
  
  var [a, , b] = f(); //中間空白
  console.log(a); // 1
  console.log(b); // 3
  
  var o = {p: 42, q: true};//預設值
  var {p, q} = o;
  
  console.log(p); // 42
  console.log(q); // true