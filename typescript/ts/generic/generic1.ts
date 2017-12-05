//T 可以是任億的基本型別和物件型別
//但這樣太廣泛了意義不大
function identity<T>(arg: T): T {
    return arg;
}
identity("Hi");
interface SquareStyle {
    color?: string; //Optional
    width: number;
    readonly height:number; //初始給值後不可修改
}
//定義好型別
function geValue<SquareStyle>(arg: SquareStyle):void {
    console.log(arg);
}



