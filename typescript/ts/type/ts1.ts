/*
布林值:boolean
數字:number
字串:string
陣列:Array<T> , T[]
枚舉:enum
任意值:any
空值:void
Null 和 Undefined
Never:never
轉型:<T> ,T as S
*/
let isNumber :boolean = false;
let iAmNumber :number = 10;
let myString :string = 'Hello';
let myStringArray1 :Array<String> ;
let myStringArray2 :string[] = null;
let anyValue :any = null;
let voidValue:void = null;
let nullValue:null = null;
let undefinedValue:undefined = undefined;
enum Color {
    RED,
    GREEN,
    BLUE
}
let neverValue= function():never {
    //never 使用在function return ,表示永遠不會執行完成的function
    throw Error('Error');
}
let myColor :Color = Color.BLUE;
