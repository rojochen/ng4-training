export interface SquareStyle {
    color?: string; //Optional
    width: number;
    readonly height:number; //初始給值後不可修改
}

export interface Point {
    x: string;
    y: number;
    
}

export interface Square{
    style : SquareStyle; //可指定Interface
    point : Point
}

let testSquareStyle = ()=>{

}