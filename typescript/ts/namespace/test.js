/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
function test() {
    // Some samples to try
    var strings = ["Hello", "98052", "101"];
    // Validators to use
    var validators = {};
    validators["Letters only"] = new Validation.LettersOnlyValidator();
}
