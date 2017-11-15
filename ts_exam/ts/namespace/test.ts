/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
function test(){
    let strings:string[] = ["Hello", "98052", "101"];

    let validators: { [s: string]: Validation.StringValidator; } = {};
    validators["Letters only"] = new Validation.LettersOnlyValidator();
}