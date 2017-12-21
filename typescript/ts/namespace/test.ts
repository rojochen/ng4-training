/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

//  參照Validation , LettersOnlyValidator ,ZipCodeValidator
let strings = ["Hello", "98052", "101"];


let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        console.log( (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
}