var a, b, rest;
//陣例解構
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
//陣例解構
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
//物件解構
({a, b} = {a: 10, b: 20});
console.log(a); // 10
console.log(b); // 20
