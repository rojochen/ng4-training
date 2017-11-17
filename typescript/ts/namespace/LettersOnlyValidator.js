/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersValidator = /** @class */ (function () {
        function LettersValidator() {
        }
        LettersValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersValidator;
    }());
    Validation.LettersValidator = LettersValidator;
})(Validation || (Validation = {}));
