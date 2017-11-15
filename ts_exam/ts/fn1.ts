// Named function
function add1(x:number, y?:number):void {
    console.log(x+y);
}

// Anonymous function
let add2 = (x:number, y:number) :number =>  x+y;

//default 參數不用給型態
(x:number,y = 1)=>{
    return x+y
}
//Rest Parameter
function buildName(firstName: string, ...names: Array<string>) {
    return firstName + " " + names.join(" ");
}


