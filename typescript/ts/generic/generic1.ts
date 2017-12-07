//T 可以是的基本型別和物件型別
function identity<T>(arg: T): T {
	return arg;
}
identity("Hi");
interface SquareStyle {
	color?: string; //Optional
	width: number;
	readonly height:number; //初始給值後不可修改
}
//泛型 +interface or Abstract class比較合適 
function getSquare<SquareStyle>(arg: SquareStyle):void {
	console.log(arg);
}


