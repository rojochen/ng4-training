{
	interface NumberArray {
		//Value 為數字
		[index: number]: number;
	}
	interface StringArray {
		//value 為字串
		[index: number]: string;
	}
	let numberArray: NumberArray;
	numberArray = [1, 2];
	let stringArray: StringArray
	stringArray = ['Bob', 'Eric'];

	let array = new Array<string>();
	array[1] = 'bob';
	array["a"] = 'eric';
}