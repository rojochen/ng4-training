interface NumberArray {
	//index 為數字 ,Value 為數字
	[index: number]: number;
}
interface StringArray {
	//key :字串 ,value 為字串
	[index: string]: string;
}
let numberArray:NumberArray;
numberArray=[1,2];
//key-value的型別 
let stringArray: StringArray;
stringArray["1"] = "Bob";
stringArray["2"] = "Fred";