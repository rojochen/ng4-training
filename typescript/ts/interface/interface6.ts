interface NumberArray {
    [index: number]: number;
}
interface StringArray {
    [index: string]: string;
}
let numberArray:NumberArray;
numberArray=[1,2];
let stringArray: StringArray;
stringArray["1"] = "Bob";
stringArray["2"] = "Fred";
 