interface SquareStyle {
    color?: string; //Optional
    width: number;
    readonly height:number; //初始給值後不可修改
}

//定義好型別,一般這樣使用才有意議
function getSquare< T extends SquareStyle>(arg: T):void {
    console.log(arg);
}
