let myAdd: (x: number, y: number)=>number = function(x: number, y: number): number { return x+y; };

//funtion type: (x: number, y: number)=>number
//funtion impl: = function(x: number, y: number): number { return x+y; };
let myAdd2: (x: number, y: number)=>number = (x: number, y: number): number => { return x+y; };

let myAdd3: (x: number, y: number)=>number = (x: number, y: number): number => x+y;

let myAdd4: (x: number, y: number)=>number = (x, y) => { return x+y; };


 