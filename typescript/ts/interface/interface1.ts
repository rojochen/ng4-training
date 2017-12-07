//create interface
interface Square{
    style : SquareStyle; //可指定Interface
    point : Point
}

interface SquareStyle {
    color?: string; //Optional
    width: number;
    readonly height:number; //初始給值後不可修改
}

interface Point {
    x: string;
    y: number;
    
}